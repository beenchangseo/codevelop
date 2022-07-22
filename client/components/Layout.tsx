import {ReactElement, useEffect} from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import {NextRouter, useRouter} from "next/router";


type LayoutProps = {
    children: ReactElement;
}

const Layout = ({children}: LayoutProps) => {
    const router:NextRouter = useRouter();
    useEffect(()=>{
        console.log(router)
    },[router])
    return(
        <>
            <div className={'nav'}>
                <TopNav user_name={children.props.user_name}/>
            </div>
            <div className={'main'}>
                {children}
            </div>
            <style jsx>{`
              .main{
                background-color: #263747;
              }
              .nav{
                position: sticky;
                top: 0;
                background-color: #0c151c;
              }
            `}</style>
        </>
    )
}
export default Layout
