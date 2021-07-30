// import "../../assets/css/modal.css"
// import React, { useState } from "react";
// import { withRouter } from "react-router";
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// function Registration(props) {

//     const { open, close, header } = props;
//     // 회원가입 Inputs
//     // const [form, setForm] = useState({
//     //     name: '',
//     //     email: '',
//     //     password: '',
//     //     confirmpassword: ''
//     // });

//     // const { Name, Email, Password, ConfirmPassword } = form;

//     // const onRegInputHandler = (e) => {
//     //     const { value, name } = e.target;
//     //     setForm({
//     //         ...form,
//     //         [name]: value
//     //     });
//     //     console.log(name);
//     // };
//     const [Name, setName] = useState("");
//     const [Email, setEmail] = useState("");
//     const [Password, setPassword] = useState("");
//     const [ConfirmPassword, setConfirmPassword] = useState("");
//     const onNameHandler = (event) => {
//         setName(event.currentTarget.value);
//     }
//     const onEmailHandler = (event) => {
//         setEmail(event.currentTarget.value);
//     }
//     const onPasswordHandler = (event) => {
//         setPassword(event.currentTarget.value);
//     }
//     const onConfirmPasswordHandler = (event) => {
//         setConfirmPassword(event.currentTarget.value);
//     }

//     const { register, handleSubmit, erros } = useForm();
//     const onSubmit = (form) => {
//         alert(`Multiple validation Input: ${form.mulitpleValidation}`);
//     };


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
//                         <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)} >
//                             <label>Name</label>
//                             <input type="text" name="name" placeholder="이름" value={Name} onChange={onNameHandler} />
//                             <label>Email</label>
//                             <input type="email" name="email" placeholder="이메일" value={Email} onChange={onEmailHandler} />
//                             <label>Password</label>
//                             <input type="password" name="password" placeholder="패스워드" value={Password} onChange={onPasswordHandler} />
//                             <label>ConfirmPassword</label>
//                             <input type="password" name="confirmpassword" placeholder="패스워드 확인" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
//                             <input type="submit" value="SignUp" disabled={Email ==="" && Email < 10}/>
//                         </form>
//                     </main>
//                     <footer>
//                         <button className="close" onClick={close}>Submit</button>
//                     </footer>
//                 </section>
//             ) : null}

//         </div>
//     )
// }




import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router";
import axios from 'axios'

const Registration = (props) => {
    const { open, close, header } = props;

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        name: yup.string().min(3).max(30).required(),
        password: yup.string().min(4).max(10).required(),
        checkPw: yup
            .string()
            .oneOf([yup.ref('password'), null])
            .required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
        axios.post('/api/users/', { email: data.email, name: data.name, password: data.password }).then(res => {
            console.log(res.data)
        })
    };
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


                        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(submitForm)} >
                            <label htmlFor="email">이메일</label>
                            <input type="text" {...register('email')} />
                            <span>{errors.email && '이메일 형식이 맞지 않습니다.'}</span>
                            <label htmlFor="name">이름</label>
                            <input type="text" {...register('name')} />
                            <span>{errors.name && '이름 형식이 맞지 않습니다.'}</span>
                            <label htmlFor="password">비밀번호</label>
                            <input type="text" {...register('password')} />
                            <span>{errors.password && '비밀번호 형식이 맞지 않습니다.'}</span>
                            <label htmlFor="checkPw">비밀번호 확인</label>
                            <input type="text" {...register('checkPw')} />
                            <span>{errors.checkPw && '비밀번호가 맞지 않습니다.'}</span>
                            <button type="submit">회원가입</button>
                        </form>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>Submit</button>
                    </footer>
                </section>
            ) : null}

        </div>
    )
}

export default withRouter(Registration);