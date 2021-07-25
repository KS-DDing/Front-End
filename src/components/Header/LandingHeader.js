import React, {useState} from "react";
import LoginModal from '../Modal/Login';

function LandingHeader(props) {
    
    const[modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            "초기화면 헤더"
            <div>
                <button onClick={openModal}>로그인</button>
                <LoginModal open={modalOpen} close={closeModal} header="Modal heading">
                    로그인 Modal
                </LoginModal>
            </div>
        </div>
    )
}

export default LandingHeader;