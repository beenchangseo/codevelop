import type {GetServerSideProps, NextPage} from 'next'
import axios from "axios";
import cookies from "next-cookies";
import {useState} from "react";
import Link from "next/link";

interface HomePageProps{
  user_name: string;
}

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  const [loginUser] = useState<string>(props.user_name);

  return <>
    <div className={'index-container'}>
      <div className={'box'}>
        <h1>
          Coding And Develope.
          <br/>
          <span>Learn to code.</span>
        </h1>
      </div>
      <div className={'box'}>
        <p style={{
          fontSize: '17px'
        }}>
          코딩은 진짜를 만들어보는거야!<br/>
          웹 컴파일러에서 쉽게 따라 만들면서 코딩을 배우세요.
        </p>
      </div>
      <div className={'box'}>
        {loginUser === null ?
            <button className={'btn'}><Link href={'/learn/demo'}><a>Go to start →</a></Link></button>
            : <button className={'btn'}><Link href={'/learn/demo'}><a>Go to learn →</a></Link></button>}
      </div>
      <div className={'box'}>
        <img src={'/icons/programming.gif'} width={400} height={300} style={{marginBottom: 30}}/>
      </div>
    </div>
    <style jsx>{`
      .index-container {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .box{
        text-align: center;
      }
      .btn{
        border: 1px solid white;
        border-radius: 7px;
        padding: 10px;
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        margin: 20px;
      }
      h1{
        margin: 0;
        padding-top: 4rem;
        font-size: 50px;
        font-style: oblique;
      }
    `}</style>
  </>
}

export default Home
export const getServerSideProps:GetServerSideProps = async (context) => {
  const token: string | undefined = cookies(context).jwt;
  if (!token){
    return {
      props: {
        user_name: null
      }
    }
  }else{
    const response = await axios.get('http://localhost:3001/user/token-verify',{
      headers: {
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.data});
    return {
      props: {
        user_name: response.user_name,
      }
    }
  }

}