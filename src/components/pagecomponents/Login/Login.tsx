import './Login.css';
import React, { FC, Dispatch, SetStateAction, useState, useEffect, FormEvent } from 'react';
import { ResponseData, User } from '../../../model';
import { InputGroup, Form, Button } from 'react-bootstrap';
import axios from '../../../api/axios';
interface Props {
    setUser: Dispatch<SetStateAction<User | null>>;
}
const Login: FC<Props> = props => {
    const [username, setUsername] = useState<String>();
    const [password, setPassword] = useState<String>();
    const [noti, setNoti] = useState<String>();


    const loginHandler = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const userLogin = {
                email: username,
                notificationToken: "",
                password: password
            }
            const res = await axios.post("/auth/login", userLogin);
            props.setUser(res.data.data);
            localStorage.setItem('user', JSON.stringify(res.data.data));

        } catch (error) {
            alert("Input Invalid")
        }
    }


    return (
        <div id="Login">
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={loginHandler}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Username
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Username"
                        aria-describedby="inputGroup-sizing-default"
                        required name="username"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Password
                    </InputGroup.Text>
                    <Form.Control
                        required name="password"
                        type="password"
                        aria-label="Password"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Password
                    </InputGroup.Text>
                    <Form.Control
                        name="notificationToken"
                        type="text"
                        aria-label="Password"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => { setNoti(e.target.value) }}
                    />
                </InputGroup>
                <Button variant="outline-info" type="submit" className="btn-login">Login</Button>
            </form>
        </div>
    )
}

export default Login