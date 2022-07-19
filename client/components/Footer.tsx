const Footer = () => {

    return <>
        <div className={'footer-container'}>
            <div className={'box'}>
                <img className={'github-icon'} src={'/icons/github-icon.svg'}/>
            </div>
            <div className={'box'}>
                <a>
                    <p>Github</p>
                </a>
            </div>
            <div className={'box'}>
                <p> Email: beenchangseo@gmail.com</p>
            </div>
            <div className={'box'}>
                <p> Contact</p>
            </div>
        </div>
        <style jsx>{`
          .footer-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            border-top: 1px solid black;
          }
          .github-icon{
            width: 50px;
            height: 50px;
            border: 1px solid white;
            border-radius: 100px;
          }
          .box {
            color: white;
          }
          p{
            margin: 0;
          }
        `}</style>
    </>
}
export default Footer