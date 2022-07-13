import type {GetServerSideProps, NextPage} from 'next'
import cookies from 'next-cookies'
import ChallengeNav from "../components/learn/ChallengeNav";
import ChallengeContents from "../components/learn/ChallengeContents";
import TopNav from "../components/TopNav";

const Home: NextPage = () => {
  return <>
    <TopNav/>
    <div className={"learn-contents"}>
      <ChallengeNav/>
      <ChallengeContents/>
    </div>
  </>
}

export default Home
export const getServerSideProps:GetServerSideProps = async (context) => { // SSR
  const token = cookies(context).jwt;
  console.log(token)

  return {
    props: {}
  }
}