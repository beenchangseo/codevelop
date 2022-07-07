import styles from "../../styles/components/learn/challengeContents.module.css"
import {useRef} from "react";
import Editor, {Monaco} from "@monaco-editor/react";

const ChallengeContents = () => {
    const editorRef = useRef(null);
    const defaultCode = 'function solution(){\n' +
        '    var answer = [];\n' +
        '    return answer;\n' +
        '}'
    function handleEditorDidMount(editor: any, monaco: Monaco) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        console.log("hhh", editor, monaco);
        editorRef.current = editor;
    }

    return (
        <>
            <div className={styles.challengeContents}>
                <div className={styles.mainSection}>
                    <div className={styles.problemSection}>
                        <div className={styles.problemContents}>
                            <div>
                                <h5>문제 설명</h5>
                                <p>신입사원 무지는 게시판 불량 이용자를 신고하고
                                    처리 결과를 메일로 발송하는 시스템을 개발하려 합니다.
                                    무지가 개발하려는 시스템은 다음과 같습니다.</p>
                                <ul>
                                    <li>
                                        각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gutter}/>
                    <div className={styles.solutionSections}>
                        <div className={styles.codeSections}>
                            <div className={styles.codeNav}>
                                <a>solution.js</a>
                                <select style={{marginLeft: "auto"}}>
                                    <option>javascript</option>
                                    <option>c++</option>
                                    <option>python</option>
                                </select>
                            </div>
                            <div className={styles.code}>
                                <Editor
                                    height="50vh"
                                    defaultLanguage="javascript"
                                    defaultValue={defaultCode}
                                    onMount={handleEditorDidMount}
                                    theme={'vs-dark'}
                                    options={{
                                        minimap: {enabled: false}
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.outputSections}>
                            <div className={styles.codeNav}>
                                <a>실행 결과</a>
                            </div>
                            <div>
                                <a>실행 결과가 여기에 표시됩니다.</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.buttonSection}>
                    {/*<p>hello</p>*/}
                </div>
            </div>


            <style jsx>{`
              .outputNav{
                color: white;
              }
            `}</style>
        </>
    )
}

export default ChallengeContents