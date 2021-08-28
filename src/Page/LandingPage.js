import React, {useEffect,useState} from 'react';
import { withRouter, Link } from 'react-router-dom';
import LandingHeader from '../components/Header/LandingHeader';
import AllPosts from '../view/Post/AllPosts';
import axios from 'axios'

function LandingPage(props){

    // 로그인 정보 가져오기
    useEffect(() => {
        axios.get('/api/users/profile').then((req, res) =>setState(req.data))
       
    }, [])
    
    const [state, setState] = useState("")
    console.log(state)
    const id = state.id // url에 parameter를 전달하기 위해서 id 변수생성
    const name = state.name
    console.log(id)

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
                    <Link to={`/personal/${id}`}>개인 화면</Link>
                </li>
                <li>
                    <Link to={`/profile/${id}`}>프로필</Link>
                </li>
            </ul>
            <AllPosts/>
        </div>
    )
}
export default withRouter(LandingPage);