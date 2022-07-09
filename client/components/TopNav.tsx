import styles from "../styles/components/topNavigation.module.css"

const TopNav = () => {
    return (
        <>
            <div className={styles.topNavContainer}>
                <a className={styles.navbarLogo} href={'/'} >
                    <img src={'/logo.png'} alt={"logo"}/>
                </a>
                <ol className={styles.breadcrumb}>
                    <li>
                        <a href={'/'}>코딩테스트 연습</a>
                    </li>
                    <li>
                        <a href={'/'}>문제 이름</a>
                    </li>
                </ol>
                <div className={styles.navbarRight}>
                    <ul className={styles.navbarRightUl}>
                        <li>
                            <a href={'/'}>도움말</a>
                        </li>
                        <li>
경                            <a href={'/auth/login'}>로그인</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopNav