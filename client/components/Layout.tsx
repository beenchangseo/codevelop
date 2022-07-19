import {ReactElement} from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";


type LayoutProps = {
    children: ReactElement;
}

const Layout = ({children}: LayoutProps) => {

    return(
        <>
            <div className={'nav'} style={{
                position: "sticky",
                top: 0,
                backgroundColor: "#0c151c",
                justifyContent: "center",
                display: "flex"
            }}>
                <TopNav user_name={children.props.user_name}/>
            </div>
            <div className={'main'} style={{backgroundColor: "#263747"}}>
                {children}
            </div>
            <div className={'footer'} style={{backgroundColor: "#263747"}}>
                <Footer/>
            </div>
        </>
    )
}
export default Layout
