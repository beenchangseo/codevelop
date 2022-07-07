import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";
import {NextRouter, useRouter} from "next/router";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    if ((router.asPath).includes('auth')){
      setIsLogin(true);
    }
  },[router])
  return <>
    <Head>
      <title>코테 연습장</title>
    </Head>
    {
      isLogin ?
        <Component {...pageProps} />
          :
        <Layout>
          <Component {...pageProps} />
        </Layout>
    }
  </>
}

export default MyApp
