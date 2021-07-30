import "../../assets/css/modal.css"
import React, { useState, useEffect } from "react";
import RegistrationModal from "./Registration"
import { withRouter } from 'react-router-dom';
import axios from 'axios'

function Login(props) {
//     로그인 정보 Input
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
        console.log('click login')
        console.log('Email : ' , Email)
        console.log('PW : ', Password)
        event.preventDefault();
        
        let body ={
            email: Email,
            password: Password
        }

        axios.post('/api/users/login',body).then(res => {
            console.log(res);
            console.log('res.data.email :: ', res.data.email)
            console.log('res.data.password :: ',res.data.password )
            if(res.data.email === Email) {
                console.log('====================로그인 성공!')
                props.history.push('/profile');
                // sessionStorage.setItem('email',Email)
            } else { 
                alert('Login error');
            }
        })
        .catch()
    }

    // useEffect(() => {
    //     console.log('get alluser')
    //     axios.get('/api/users/alluser')
    //     .then(res => console.log(res))
    //     .catch()
    // }, [])
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

                            <button type="submit" disabled={Email ==="" && Email < 10}>로그인</button>
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

export default withRouter(Login);