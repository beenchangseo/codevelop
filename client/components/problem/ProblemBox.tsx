interface ProblemBoxProps{
    problem_title: string;
    problem_level: number;
}

const ProblemBox = (props: ProblemBoxProps) => {
    return<>
        <div className={'problem-box'}>
            <div className={'problem-level'}>
                LV. {props.problem_level}
            </div>
            <div className={'problem-title'}>
                <a>{props.problem_title}</a>
            </div>
            <div className={'problem-contents'}>
                <div className={'challengers'}>
                    23,454명이 완료했어요.
                </div>
                <div className={'challenge'}>
                    <div>
                        <a>도전하기</a>
                    </div>
                </div>
            </div>

        </div>

        <style jsx>{`
          .problem-box {
            width: 500px;
            margin: 10px 50px 10px 10px;
            padding: 20px;
            border: 1px solid #3f5262;
            border-radius: 10px;
            background-color: #3f5262;
          }

          .problem-level {
            display: inline-flex;
            padding: 0px 0.75rem;
            height: 1.5rem;
            align-items: center;
            background-color: green;
            color: white;
            border-radius: 3px;
            font-size: 13px;
            font-style: oblique;
          }

          .problem-title {
            margin-top: 10px;
            padding: 0 0.3rem;
            font-size: 18px;
          }

          .problem-contents {
            display: flex;
            margin-top: 4px;
            padding: 0 0.3rem;
            align-items: center;
          }

          .challengers {
            color: #b7b6b6;
            font-size: 13px;
          }

          .challenge {
            display: flex;
            flex-grow: 1;
            justify-content: end;
          }

          .challenge > div {
            padding: 4px 10px 4px 10px;
            border: 1px solid #b0b1b5;
            border-radius: 5px;
            font-size: 15px;
            cursor: pointer;
          }

          .challenge > div:hover {
            border: 1px solid #b7b6b6;
            background-color: #39a474;
            color: white;
          }
        `}</style>
    </>
}

export default ProblemBox