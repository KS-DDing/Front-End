import React from 'react';
import axios from 'axios';

export default function Delete(props) {
    
    console.log("포스트 번호")
    console.log(props.match.params.postid)
    console.log("유저 번호")
    console.log(props.location.state)
    console.log("지우기 성공?")
    let body = {
        postId: props.match.params.postid,
    }
    axios.post('/api/post/delete',body).then(res => console.log(res))
    props.history.push(`/personal/${props.location.state}`)
    window.location.reload()
    
}