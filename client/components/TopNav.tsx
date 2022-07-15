import styles from "../styles/components/topNavigation.module.css"

import {useState} from "react";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/router";

interface pageProps{
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
            <div className={styles.topNavContainer}>
                <a className={styles.navbarLogo} href={'/'} >
                    <img src={'/logo.png'} alt={"logo"}/>
                </a>
                <ol className={styles.breadcrumb}>
                    <li>
                        <a href={'/'}>CODEVELOPE</a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href={'/'}>문제 이름</a>*/}
                    {/*</li>*/}
                </ol>
                <div className={styles.navbarRight}>
                    <ul className={styles.navbarRightUl}>
                        {userName ?
                            <>
                                <li>
                                    <a href={'/'}>{userName}</a>
                                </li>
                                <li>
                                    <a onClick={logoutHandler}>Logout</a>
                                </li>
                            </>
                             :
                            <>
                                <li>
                                    <a href={'/auth/login'}>Login</a>
                                </li>
                                <li>
                                    <a href={'/auth/signup'}>Join</a>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopNav