import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Children } from 'react';

// setText(res.data.content)

export default function PostView(props) {

    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const GetAllPosts = async () => {
            try {
                setError(null);
                setText('');
                setLoading(true);
                const response = await axios.get(`/api/post/5`);
                setText(response.data);
            } catch(e) {
                setError(e)
            }
            setLoading(false);
        };
        GetAllPosts();
    }, [])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!text) return null;

    console.log(text.content)
    return (
        <>
        <Viewer
            viewer="true"
            initialEditType="markdown"
            initialValue={text.content}
        />
        </>
    );
}