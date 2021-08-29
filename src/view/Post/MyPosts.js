import React, { useState, useEffect } from "react";
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

export default function MyPosts(props) {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const id = props.id.id

    useEffect( () => {
        const GetMyPosts = async () => {
            try{
                setError(null);
                setData('');
                setLoading(true);
                const response = await axios.get(`/api/posts/${id}`)
                setData(response.data[0].posts);
            } catch(e) {
                setError(e)
            }
            setLoading(false);
        };
        GetMyPosts();
    }, [])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null;

    console.log(data[0].posts)

    const covertDate = (createAt) => {
        let newDate = Date(createAt)

        
        return newDate
    }

    const rederAllPosts = () => (
        
        data.map((content, index) => (
            // console.log(index)
            // console.log(content.id)
            
            <div>
                <ul key={index}>
                    <li>썸네일: {content.images}</li>
                    <li>내용: <Viewer
                                viewer="true"
                                initialEditType="markdown"
                                initialValue={content.content}
                                />
                    </li>
                    <li>해쉬태그: {content.hashtags}</li>
                    <li>작성자: {content.userId}</li>
                    <li>작성날짜: {covertDate(content.createAt)}</li>
                    <li>추천수: {content.liker}</li>
                </ul>
            </div>
        ))
    )

    return (
        <div>
        {rederAllPosts()}
        {/* <Viewer
            viewer="true"
            initialEditType="markdown"
            initialValue={data.content}
        /> */}
        </div>
    );
}