import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import {reverseMapping} from '../../util/Map/Mapping';

export default function MyPosts(props) {
    console.log(props.id.match.params)
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const id = props.id.match.params.id

    useEffect(() => {
        const GetMyPosts = async () => {
            try {
                setError(null);
                setData('');
                setLoading(true);
                const response = await axios.get(`/api/posts/${id}`)
                setData(response.data[0].posts);
            } catch (e) {
                setError(e)
            }
            setLoading(false);
        };
        GetMyPosts();
    }, [id])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!data) return null;

    console.log(data)

    // 시간 수정
    const covertDate = (createAt) => {
        let newDate = Date(createAt)


        return newDate
    }

    // 역순으로 맵핑 - id기준
    // const reversed = data.map(data => data).reverse(); 
    const reversed = reverseMapping(data);
    console.log(reversed)

    const rederMyPosts = () => (
        
        reversed.map((content, index) => (

            <div style={{ marign: "auto" }}>
                <Link to={{
                    pathname: `/viewer/${content.id}`,
                    state: props.id.match.params.id
                }}>
                    <button>
                        <ul key={index}>
                            <li>썸네일: {content.images}</li>
                            <li>내용: <Viewer
                                viewer="true"
                                initialEditType="markdown"
                                initialValue={content.content}
                            />
                            </li>
                            <li>해쉬태그: {content.hashtags}</li>
                            <li>작성자: {content.author}</li>
                            <li>작성날짜: {covertDate(content.createAt)}</li>
                            <li>추천수: {content.liker}</li>
                        </ul>
                    </button></Link>
            </div>
        ))
    )

    return (
        <div>
            {rederMyPosts()}
            {/* <Viewer
            viewer="true"
            initialEditType="markdown"
            initialValue={data.content}
        /> */}
        </div>
    );
}
