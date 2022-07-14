import {NextPage} from "next";
import React, {useState} from "react";
import axios from "axios";

const Signup: NextPage = () => {
    const [inputs, setInputs] = useState({
        user_name: '',
        email: ''
    });
    const [message, setMessage] = useState({
        isSuccess: false,
        isError: false,
        message: ''
    })
    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    const submitFormHandler = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await axios.post('/api/user/signup', {
            email: inputs.email,
            user_name: inputs.user_name
        }).then(response => {
            if (response.status === 201){
                setMessage({
                    isSuccess: true,
                    isError: false,
                    message: '계정 생성이 완료되었습니다'
                });
            }
        }).catch((error)=>{
            if (error.response.status === 409){
                setMessage({
                    isSuccess: false,
                    isError: true,
                    message: error.response.data.message
                })
            }
        });
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
                        <a className={'loginBtn'} href={'/auth/login'}>Login →</a>
                    </div>
                    : null
                }
                <form className={'signUp-form'} onSubmit={submitFormHandler}>
                    <label>Name</label>
                    <div>
                        <input type={'text'} name={'user_name'} onChange={inputChangeHandler} value={inputs.user_name} placeholder={'Name'}/>
                    </div>
                    <br/>
                    <label>Email</label>
                    <div>
                        <input type={'text'} name={'email'} onChange={inputChangeHandler} value={inputs.email} placeholder={'Email'}/>
                    </div>

                    <button style={{width:'100%', marginTop:'30px'}}>Create Account</button>
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
          }
          button{
            border-radius: 7px;
            padding: 10px;
            border: 0;
          }
        `}</style>
    </>
}

export default Signup