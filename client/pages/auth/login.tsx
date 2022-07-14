import {NextPage} from "next";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Login: NextPage = () => {

    const [email, setEmail] = useState('');
    const [emailHost, setEmailHost] = useState('');
    const [message, setMessage] = useState({
        isSuccess: false,
        isError: false,
        message: ''
    })
    const inputChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const submitFormHandler = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await axios.post('/api/user/email-verify', {
            email: email
        }).then(response => {
            if (response.status === 201){
                setMessage({
                    isSuccess: true,
                    isError: false,
                    message: '이메일로 전송된 로그인 링크를 확인하세요'
                });
                setEmailHost(email.split('@')[1]);
            }
        }).catch((error) => {
            if (error.response.status === 400){
                setMessage({
                    isSuccess: false,
                    isError: true,
                    message: '올바르지 않은 이메일 형식 입니다.'
                })
            }else if (error.response.status === 409){
                setMessage({
                    isSuccess: false,
                    isError: true,
                    message: error.response.data.message
                })
            }
        })
    }
    return <>
        <div className={'signUp-container'}>
            <h3>WELCOME CODEVELOPE</h3>
            <div className={'signUp-box'}>
                {message.isError ?
                    <div className={'message-box error'}>
                        <a>{message.message}</a>
                    </div>
                    : null
                }
                {message.isSuccess ?
                    <div className={'message-box success'}>
                        <a>{message.message}</a>
                        <a className={'loginBtn'} onClick={()=>{window.open(`https://${emailHost}`)}}>Login →</a>
                    </div>
                    : null
                }
                <form className={'signUp-form'} onSubmit={submitFormHandler}>
                    <label>Email</label>
                    <div>
                        <input type={'text'} name={'email'} onChange={inputChangeHandler} value={email} placeholder={'Email'}/>
                    </div>

                    <button style={{width:'100%', marginTop:'30px'}}>Continue</button>
                </form>
            </div>
        </div>

        <style jsx>{`
          .signUp-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            color: white;
          }
          .signUp-box{
            padding: 20px;
            border: 3px solid white;
            border-radius: 7px;
          }
          .signUp-form{
            color: white;
          }
          .signUp-form > div > input{
            padding: 4px 4px 4px 15px;
            background-color: transparent;
            border-radius: 7px;
            border: 1px solid #d1d5db;
            width: 250px;
            height: 20px;
            color: white;
          }
          .message-box{
            padding: 12px;
            margin-bottom: 20px;
            border-radius: 7px;
            font-size: 10px;
          }
          .error{
            background-color: #fef2f2;
            color: red;
          }
          .success{
            background-color: #f0fdf4;
            color: #15803d
          }
          .loginBtn{
            float: right;
            text-decoration: none;
            color: #15803d;
            font-weight: bold;
            font-size: 12px;
            margin: 0;
            padding: 0;
            cursor: pointer;
          }
          button{
            border-radius: 7px;
            padding: 10px;
            border: 0;
          }
        `}</style>
    </>
}

export default Login