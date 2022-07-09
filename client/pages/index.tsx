import type { NextPage } from 'next'
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
