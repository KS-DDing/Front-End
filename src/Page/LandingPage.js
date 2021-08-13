import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LandingHeader from '../components/Header/LandingHeader';
import AllPosts from '../view/Post/AllPosts';
import axios from 'axios'

function LandingPage(props){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/post">글 작성하기</Link>
                </li>
                <li>
                    <Link to="/admin">관리자 화면</Link>
                </li>
                <li>
                    <Link to="/personal">개인 화면</Link>
                </li>
                <li>
                    <Link to="/:id/profile">프로필</Link>
                </li>
            </ul>
            <AllPosts/>
        </div>
    )
}
export default withRouter(LandingPage);