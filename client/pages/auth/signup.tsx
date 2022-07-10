import {NextPage} from "next";
import React, {useState} from "react";
import axios from "axios";

const Signup: NextPage = () => {
    const [inputs, setInputs] = useState({
        nickname: '',
        email: ''
    })
    const inputChangHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    const submitFormHandler = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('why is run ?')
        // const {nickname, email} = inputs;
        // const response = await fetch('/api/user/signup', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({nickname, email})
        // });

    }
    const emailVerifyHandler = async () => {
        const response = await axios.post('/api/user/email-verify', inputs.email);
        console.log(response)

    }

    return <>
        <div className={'signUp-container'}>
            <h3>WELCOME CODEVELOPE</h3>
            <div className={'signUp-box'}>
                <label>Email</label>
                <div>
                    <input type={'text'} name={'email'} onChange={inputChangHandler} value={inputs.email} placeholder={'Email'}/>
                    <button onClick={emailVerifyHandler}>Email Check</button>
                </div>
                <form className={'signUp-form'} onSubmit={submitFormHandler}>
                    <label>Name : </label>
                    <input type={'text'} name={'nickname'} onChange={inputChangHandler} value={inputs.nickname} placeholder={'Name'} disabled={true}/>
                    <input type={"submit"} value={'SignUp'} disabled={true}/>
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
            border-radius: 10px;
          }
          .signUp-form{
            //display: flex;
            //flex-flow: column;
            color: white;
          }
        `}</style>
    </>
}

export default Signup