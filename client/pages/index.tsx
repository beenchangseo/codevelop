import type { NextPage } from 'next'
import ChallengeNav from "../components/learn/ChallengeNav";
import ChallengeContents from "../components/learn/ChallengeContents";

const Home: NextPage = () => {
  return <>
    <div className={"learn-contents"}>
      <ChallengeNav/>
      <ChallengeContents/>
    </div>
  </>
}

export default Home
