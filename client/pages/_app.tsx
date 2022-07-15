import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";
import {Fragment} from "react";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const isLayoutNeeded = appProps.router.pathname.includes(`/confirm`);
  const LayoutComponent = !isLayoutNeeded ? Layout : Fragment;
  return <>
    <Head>
      <title>코테 연습장</title>
    </Head>
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  </>
}

export default MyApp
