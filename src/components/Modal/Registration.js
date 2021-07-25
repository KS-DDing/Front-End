import "../../assets/css/modal.css"
import React, { useState } from "react";

function Registration(props) {

    // 회원가입 Inputs
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const { Name, Email, Password, ConfirmPassword } = form;

    const onRegInputHandler = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        console.log(name);
    };

    const { open, close, header } = props;

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
                        <form style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Name</label>
                            <input type="text" name="name" placeholder="이름" value={Name} onChange={onRegInputHandler} />
                            <label>Email</label>
                            <input type="email" name="email" placeholder="이메일" value={Email} onChange={onRegInputHandler} />
                            <label>Password</label>
                            <input type="password" name="password" placeholder="패스워드" value={Password} onChange={onRegInputHandler} />
                            <label>ConfirmPassword</label>
                            <input type="password" name="confirmpassword" placeholder="패스워드 확인" value={ConfirmPassword} onChange={onRegInputHandler} />
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

export default Registration;