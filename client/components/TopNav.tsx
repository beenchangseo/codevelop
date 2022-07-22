import styles from "../styles/components/topNavigation.module.css"

import {useState} from "react";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/router";
import Link from "next/link";

interface pageProps {
    user_name: string;
}

const TopNav = (props: pageProps) => {
    const [userName] = useState<string>(props.user_name);
    const router = useRouter()
    const logoutHandler = () => {
        deleteCookie('jwt');
        router.reload();
    };
    return (
        <>
            <div className={'nav-container'}>
                <div className={'logo-section'}>
                    <Link href={'/'}>
                        <img src={'/logo.svg'} alt={"logo"}/>
                    </Link>
                </div>
                <div className={'menu-section'}>
                    <Link href={'/problem'}>
                        <a className={'menu-items'}>Problems</a>
                    </Link>
                    <Link href={'/learn/demo'}>
                        <a className={'menu-items'}>Challenges</a>
                    </Link>
                    <Link href={'/community'}>
                        <a className={'menu-items'}>Community</a>
                    </Link>
                </div>
                <div className={'user-section'}>
                    <Link href={'/auth/login'}>
                        <a className={'menu-items'}>Login</a>
                    </Link>
                    <Link href={'/auth/signup'}>
                        <a className={'menu-items'}>Join</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
              .nav-container {
                color: white;
                padding-left: 2rem;
                padding-right: 2rem;
                display: flex;
                align-items: center;
                max-width: 80rem;
                margin-left: auto;
                margin-right: auto;
              }
              .logo-section{
                padding: 4px;
                cursor: pointer;
              }
              .logo-section > img {
                width: 41px;
                height: 32px;
                vertical-align: middle;
                margin: 5px 5px 5px 0;
              }

              .menu-section {
                display: flex;
              }

              .menu-items {
                margin-left: 1.5rem;
                cursor: pointer;
                color: #909090;
              }

              .menu-items:hover {
                color: white;
              }

              .user-section {
                display: flex;
                flex-grow: 1;
                justify-content: end;
              }
            `}</style>


            {/*<div className={styles.topNavContainer}>*/}
            {/*    <a className={styles.navbarLogo} href={'/'} >*/}
            {/*        <img src={'/logo.png'} alt={"logo"}/>*/}
            {/*    </a>*/}
            {/*    <ol className={styles.breadcrumb}>*/}
            {/*        <li>*/}
            {/*            <a href={'/'}>CODEVELOPE</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href={'/problem'}>문제 연습</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href={'/problem'}>문제 만들기</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href={'/problem'}>커뮤니티</a>*/}
            {/*        </li>*/}
            {/*    </ol>*/}
            {/*    <div className={styles.navbarRight}>*/}
            {/*        <ul className={styles.navbarRightUl}>*/}
            {/*            {userName ?*/}
            {/*                <>*/}
            {/*                    <li>*/}
            {/*                        <a href={'/'} style={{fontSize: '13px'}}>*/}
            {/*                            <span>*/}
            {/*                                {userName}*/}
            {/*                            </span>*/}
            {/*                            님*/}
            {/*                        </a>*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <a onClick={logoutHandler}>Logout</a>*/}
            {/*                    </li>*/}
            {/*                </>*/}
            {/*                 :*/}
            {/*                <>*/}
            {/*                    <li>*/}
            {/*                        <a href={'/auth/login'}>Login</a>*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <a href={'/auth/signup'}>Join</a>*/}
            {/*                    </li>*/}
            {/*                </>*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default TopNav