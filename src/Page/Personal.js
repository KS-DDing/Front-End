import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import MyPost from '../view/Post/MyPosts'
function PersonalPage({ match }) {
    console.log(match.params)
    return (
        <div>
            <h1>여긴 개인화면^^7 자기글만 보임</h1>
            <Link to={{
                pathname: "/post",
                state: match.params
            }}>글 새로 작성하기</Link>
            <MyPost id={match.params} />
        </div>


    )
}

export default withRouter(PersonalPage);