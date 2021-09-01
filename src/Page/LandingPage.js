import React, {useEffect,useState} from 'react';
import { withRouter, Link } from 'react-router-dom';
import AllPosts from '../view/Post/AllPosts';
import axios from 'axios'

function LandingPage(props){

    const [state, setState] = useState("")
    // 로그인 정보 가져오기
    useEffect(() => {
        axios.get('/api/users/profile').then((req) =>setState(req.data))
        
        
    }, [])
    
    
    console.log(state)
    const id = state.id // url에 parameter를 전달하기 위해서 id 변수생성

    return(
        <div>
            <ul>
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
            <AllPosts id={id}/>
        </div>
    )
}
export default withRouter(LandingPage);