import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LandingHeader from '../components/Header/LandingHeader';
import axios from 'axios'

function LandingPage(props){
    console.log('h1')
    axios.get('/api/users/alluser').then((response) => console.log(response));
    return(
        <div>
            <div>
                <LandingHeader/>
            </div>
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
            </ul>
        </div>
    )
}
export default withRouter(LandingPage);