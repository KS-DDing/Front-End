import "../../assets/css/modal.css"
import React, { useState } from "react";
import RegistrationModal from "./Registration";
import axios from 'axios'

function Login(props) {
    // 로그인 정보 Input
    // const [form, setForm] = useState({
    //     email : '',
    //     password : ''
    // });

    // const {Email, Password} = form;

    // const onLoginInputHandler = (e) => {
    //     const {value, name} = e.target;
    //     setForm({
    //         ...form,
    //         [name]:value
    //     });
    //     console.log(name + " : "+value);
    // };
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    // 회원가입 모달창
    const { open, close, header } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    
    //
    const onLoginSubmit = (event) => {

        event.preventDefault();
        
        let body ={
            email: Email,
            password: Password
        }

        axios.post('/api/users/login', body).then(res => console.log(res));
    }

    return (

        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>&times;</button>
                    </header>
                    <main>
                        {props.children}
                        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onLoginSubmit}>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="이메일" value={Email} onChange={onEmailHandler} />

                            <label>Password</label>
                            <input type="password" name="password" placeholder="패스워드" value={Password} onChange={onPasswordHandler}/>

                            <button type="submit" >로그인</button>
                        </form>
                    </main>
                    <footer style={{textAlign:"center"}}>
                        
                        <button onClick={openModal}>회원가입</button>
                        <RegistrationModal open={modalOpen} close={closeModal} header="Modal heading">
                            회원가입 모달창
                        </RegistrationModal>
                    </footer>
                </section>
            ) : null}
        </div>
    )
}

export default Login;