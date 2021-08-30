import React from 'react';
import axios from 'axios';

export default function Delete(props) {
    
    console.log("포스트 번호")
    console.log(props)
    console.log("지우기 성공?")
    let body = {
        postId: props,
    }
    axios.post('/api/post/delete',body).then(res => console.log(res))
    
}