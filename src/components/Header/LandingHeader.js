import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import LoginModal from '../Modal/Login';
import * as Logout from '../../util/Handler/Logout/LogoutHandler'
function LandingHeader(props) {
    
    useEffect(() => {
        axios.get('/api/users/profile')
            .then((req, res) => setState(req.data))
    }, [])
    const [state, setState] = useState("")
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    
    if (state.name == null) {
        return (
            <div>
                "초기화면 헤더"
                <div>
                    <Link to="/"><button>홈으로</button></Link>
                    <button onClick={openModal}>로그인</button>
                    <button onClick={Logout.Logout}>로그아웃</button>
                    <LoginModal open={modalOpen} close={closeModal} header="Modal heading">
                        로그인 Modal
                    </LoginModal>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                "초기화면 헤더"
                <div>
                    <Link to="/"><button>홈으로</button></Link>
                    <button onClick={Logout.Logout}>로그아웃</button>
                    {state.name + " 반갑습니다"}
                </div>
            </div>
        )
    }
}

export default LandingHeader;