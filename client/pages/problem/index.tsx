import {NextPage} from "next";
import ProblemBox from "../../components/problem/ProblemBox";
import {useEffect, useState} from "react";
import problemBox from "../../components/problem/ProblemBox";


const ProblemHome: NextPage = () => {
    const [problems, setProblems] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/problem/listAll')
            .then((res)=> res.json())
            .then((data)=>setProblems(data))

    },[]);
    useEffect(()=>{
        console.log(problems)
    },[problems])
    return <>
        <div className={'problem-container'}>
            <div className={'container-title'}>
                <h2>문제 풀이 &#62;</h2>
            </div>
            <div className={'container-contents'}>
                {problems.map((problem: any) => {
                    return <ProblemBox key={problem.problem_number}
                                       problem_title={problem.problem_title}
                                       problem_level={problem.problem_level}
                    />
                })}
            </div>
        </div>
        <style jsx>{`
          h2{
            margin: 0;
          }
          .problem-container{
            color: white;
            padding: 30px;
            margin-right: auto;
            margin-left: auto;
            max-width: 80rem;
          }
          .container-title{
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .container-contents{
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            margin-right: auto;
            margin-left: auto;
            justify-content: center;
          }
        `}</style>
    </>
}
export default ProblemHome