import type {GetServerSideProps, NextPage} from 'next'
import axios from "axios";
import cookies from "next-cookies";
import {useEffect} from "react";

interface HomePageProps{
  user_name: string;
}

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  useEffect(()=>{
    console.log(props.user_name);
  },[])
  return <>
    <div style={{color: "white"}}>Home Page</div>
  </>
}

export default Home
export const getServerSideProps:GetServerSideProps = async (context) => { // SSR
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
    })
        .then((response) => {return response.data});
    console.log('index SSR ',response.user_name)
    return {
      props: {
        user_name: response.user_name,
      }
    }
  }

}