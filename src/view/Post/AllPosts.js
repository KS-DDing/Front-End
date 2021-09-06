import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

export default function AllPosts(props) {

    console.log(props)

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const GetAllPosts = async () => {
            try {
                setError(null);
                setData('');
                setLoading(true);
                const response = await axios.get(`/api/posts/`);
                setData(response.data);
            } catch (e) {
                setError(e)
            }
            setLoading(false);
        };
        GetAllPosts();
    }, [])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!data) return null;

    console.log(data)

    const covertDate = (createAt) => {
        let newDate = Date(createAt)


        return newDate
    }

    const rederAllPosts = () => (



        data.map((content, index) => (

            // console.log(content.id)

            <div class="z-0">
                <Link to={{
                    pathname: `/viewer/${content.id}`,
                    state: props.id,
                }}>
                    <button>
                        <ul key={index}>
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <div class="card shadow-xl image-full">
                                    <figure>
                                        <img
                                            src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </figure>
                                    <div class="justify-center card-body">
                                    <h2 class="card-title">Title</h2>
                                    </div>
                                </div>
                                {/* <li>썸네일:{content.images}</li> */}
                                {/* <li>내용: <Viewer
                                    viewer="true"
                                    initialEditType="markdown"
                                    initialValue={content.content}
                                />
                                </li> */}
                                <li>해쉬태그: {content.hashtags}</li>
                                <li>작성자: {content.author.name}</li>
                                <li>작성날짜: {content.createAt}</li>
                                <p>추천수: 0{content.liker}</p>
                            </div>
                        </ul>
                    </button>
                </Link>
            </div >

        ))
    )

    // const rederAllPosts = () => (



    //     data.map((content, index) => (

    //         // console.log(content.id)

    //         <div style={{ marign: "auto" }}>
    //             <Link to={{
    //                 pathname: `/viewer/${content.id}`,
    //                 state: props.id,
    //             }}><button>
    //                 <ul key={index}>
    //                     <li>썸네일: {content.images}</li>
    //                     <li>내용: <Viewer
    //                         viewer="true"
    //                         initialEditType="markdown"
    //                         initialValue={content.content}
    //                     />
    //                     </li>
    //                     <li>해쉬태그: {content.hashtags}</li>
    //                     <li>작성자: {content.author.name}</li>
    //                     <li>작성날짜: {covertDate(content.createAt)}</li>
    //                     <li>추천수: {content.liker}</li>
    //                 </ul>
    //             </button></Link>
    //         </div>
    //     ))
    // )
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">전체 게시글</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {rederAllPosts()}
                </div>
            </div>
        </div>
    );
};