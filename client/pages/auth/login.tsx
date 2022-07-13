import {NextPage} from "next";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Login: NextPage = () => {

    const [email, setEmail] = useState('');
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
        <div className={'signIn-container'}>
            <form className={'signIn-form'} onSubmit={submitFormHandler}>
                <div className={'signIn-form-contents'}>
                    <div className={'logo'}>
                        <img src={'/logo.png'} alt={"logo"}/>
                    </div>
                    <div className={'title'}>
                        <h3>Codevelop</h3>
                    </div>
                    {message.isError ?
                        <div className={'message-box error'}>
                            <a>{message.message}</a>
                        </div>
                        : null
                    }
                    {message.isSuccess ?
                        <div className={'message-box success'}>
                            <a>{message.message}</a>
                            <a className={'loginBtn'} href={'/auth/login'}>Login →</a>
                        </div>
                        : null
                    }
                    <div className={'Input'}>

                        <input type={'text'} name={'email'} onChange={inputChangeHandler} placeholder={'Email'}/>
                        <label></label>
                    </div>
                    <div className={'button-section'}>
                        <ul>
                            <li>
                                <button>Sign In</button>
                            </li>
                            <li>
                                <Link href={'/auth/signup'}>
                                    <button>Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <style jsx>{`
          .signIn-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
          }
          .signIn-form{
            width: 260px;
            border-radius: 8px;
            background-color: #284b63cc;
          }
          .signIn-form-contents{
            
          }
          .logo{
            display: flex;
            justify-content: center;
            margin-top: 30px;
          }
          .title{
            display: flex;
            color: white;
            justify-content: center;
          }
          .title > h3{
            margin-top: 0;
            margin-bottom: 20px;
          }
          .Input{
            display: flex;
            justify-content: center;
          }
          .Input > input{
            border: 0;
            margin-left: 12px;
            background: transparent;
            color: #ffffffb3;
            border-bottom: 1px solid #58a4b0;
            width: 65%;
            font-size: 14px;
          }
          label{
            color: white;
            font-size: 14px;
            margin-top: 17px;
          }
          .Input input[type=text] ~ label::before {
            content: "";
          }
          .Input input[type=password] ~ label::before {
            content: "";
          }
          .button-section{
            margin-top: 15px;
          }
          .button-section>ul{
            padding: 0;
            margin-left: 25px;
            margin-right: 25px;
            display: flex;
            justify-content: space-between;
            list-style: none;
          }
          .button-section>ul:before{
              display: inline-block;
              width: 1px;
              content: '';
          }
          .button-section>ul:after{
              display: inline-block;
              width: 1px;
              content: '';
          }
          .button-section>ul>li>button{
            width: 65px;
            padding: 7px;
            border: 0;
            border-radius: 4px;
            background-color: #58a4b0;
            color: white;
            cursor: pointer;
          }
        `}</style>
    </>
}

export default Login