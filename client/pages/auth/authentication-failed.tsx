const AuthenticationFailed = ()=> {

    return<>
        <div className={'fail-container'}>
            <h1>Could not log you in.</h1>
            <h3>반드시 같은 기기, 같은 브라우저에서 로그인 링크를 요청하고, 클릭해주세요.</h3>
            <h3>
                <a href={'/auth/login'}>Try again</a>
            </h3>
        </div>
        <style jsx>{`
          .fail-container{
            color: white;
            display: flex;
            flex-flow: column;
            align-items: center;
            height: 100vh;
            width: 100vw;
            justify-content: center;
          }
          .fail-container > h3 > a {
            color: white;
          }
        `}</style>
    </>
}
export default AuthenticationFailed