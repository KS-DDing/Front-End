import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeletePost from '../components/ToastEditor/ToastDelete'

// setText(res.data.content)

export default function PostView(props) {

    console.log(props)

    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const GetOnePost = async () => {
            try {
                setError(null);
                setText('');
                setLoading(true);
                console.log(props.match.params.postid)
                const response = await axios.get(`/api/posts/one/${props.match.params.postid}`);
                setText(response.data);
            } catch(e) {
                setError(e)
            }
            setLoading(false);
        };
        GetOnePost();
    }, [props.match.params.postid])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!text) return null;

    console.log(text)
    console.log(text.content)
    console.log(props.match.params)
    return (
        <>
        <Viewer
            viewer="true"
            initialEditType="markdown"
            initialValue={text.content}
        />
        <button>좋아요</button>
        <Link to={`/post/${props.match.params.postid}`}><button>Update</button></Link>
        <button onClick={() => DeletePost(props)}>Delete</button>
        </>
    );
}