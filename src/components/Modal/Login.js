import "../../assets/css/modal.css"
import React, { useState } from "react";
import RegistrationModal from "./Registration"
import { withRouter } from 'react-router-dom';
import axios from 'axios'

import "tailwindcss/tailwind.css"

import { LockClosedIcon } from '@heroicons/react/solid'

function Example(props) {

    console.log(props)
    // 로그인 모달창
    const { open, close, header } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);

    }

    // 로그인 입력값
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onLoginSubmit = (event) => {
        console.log('click login')
        console.log('Email : ', Email)
        console.log('PW : ', Password)
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        axios.post('/api/users/login', body).then(res => {
            console.log(res);
            console.log('res.data.email :: ', res.data.email)
            console.log('res.data.password :: ', res.data.password)
            if (res.data.email === Email) {
                console.log('====================로그인 성공!')
                sessionStorage.setItem("user", JSON.stringify(true))
                props.history.push(`/personal/${res.data.id}`);
                window.location.reload();
            } else {
                alert('Login error');
            }
        })
            .catch()
    }

    return (
        <div>
            {open ? (
                <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none z-40 bg-black bg-opacity-70"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                      
                        <section>
                            <header>
                                <button className="close text-whites" onClick={close}>&times;</button>
                            </header>
                            
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col m-8 w-full bg-white outline-none focus:outline-none">
                                
                                <div className="max-w-md w-full space-y-8 m-8 ">
                                    
                                    <div className="m-8 ">
                                        
                                        <img
                                            className="mx-auto h-12 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                                        <p className="mt-2 text-center text-sm text-gray-600">
                                            Or{' '}
                                            <button
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={openModal}>
                                                Sign Up
                                            </button>
                                            <RegistrationModal open={modalOpen} close={closeModal}>
                                                회원가입 모달창
                                            </RegistrationModal>
                                        </p>
                                    </div>
                                    <form
                                        className="mt-8 space-y-6"
                                        action="#"
                                        onSubmit={onLoginSubmit}>
                                        <input type="hidden" name="remember" defaultValue="true" />
                                        <div className="rounded-md shadow-sm -space-y-px">
                                            <div>
                                                <label htmlFor="email-address" className="sr-only">
                                                    Email address
                                                </label>
                                                <input
                                                    id="email-address"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    value={Email}
                                                    required
                                                    onChange={onEmailHandler}
                                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="sr-only">
                                                    Password
                                                </label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    value={Password}
                                                    onChange={onPasswordHandler}
                                                    required
                                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                </span>
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
            </>
            ) : null}
            
        </div>
    )
}

// function Login(props) {

//     // console.log(props)
//     // 로그인 모달창
//     const { open, close, header } = props;

//     const [modalOpen, setModalOpen] = useState(false);

//     const openModal = () => {
//         setModalOpen(true);
//     }

//     const closeModal = () => {
//         setModalOpen(false);
//     }

//     // 로그인 입력값
//     const [Email, setEmail] = useState("");
//     const [Password, setPassword] = useState("");
//     const onEmailHandler = (event) =>{
//         setEmail(event.currentTarget.value);
//     }
//     const onPasswordHandler = (event) => {
//         setPassword(event.currentTarget.value);
//     }

//     const onLoginSubmit = (event) => {
//         console.log('click login')
//         console.log('Email : ' , Email)
//         console.log('PW : ', Password)
//         event.preventDefault();

//         let body ={
//             email: Email,
//             password: Password
//         }

//         axios.post('/api/users/login',body).then(res => {
//             console.log(res);
//             console.log('res.data.email :: ', res.data.email)
//             console.log('res.data.password :: ',res.data.password )
//             if(res.data.email === Email) {
//                 console.log('====================로그인 성공!')
//                 sessionStorage.setItem("user",JSON.stringify(true))
//                 props.history.push(`/personal/${res.data.id}`);
//                 window.location.reload();
//             } else { 
//                 alert('Login error');
//             }
//         })
//         .catch()
//     }

//     return (

//         <div className={open ? 'openModal modal' : 'modal'}>
//             {open ? (
//                 <section>
//                     <header>
//                         {header}
//                         <button className="close" onClick={close}>&times;</button>
//                     </header>
//                     <main>
//                         {props.children}
//                         <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onLoginSubmit}>
//                             <label>Email</label>
//                             <input type="email" name="email" placeholder="이메일" value={Email} onChange={onEmailHandler} />

//                             <label>Password</label>
//                             <input type="password" name="password" placeholder="패스워드" value={Password} onChange={onPasswordHandler}/>

//                             <button type="submit"  disabled={Email ==="" && Email < 10}>로그인</button>
//                         </form>
//                     </main>
//                     <footer style={{textAlign:"center"}}>

//                         <button onClick={openModal}>회원가입</button>
//                         <RegistrationModal open={modalOpen} close={closeModal} header="Registration Modal">
//                             회원가입 모달창
//                         </RegistrationModal>
//                     </footer>
//                 </section>
//             ) : null}
//         </div>
//     )
// }

export default withRouter(Example);