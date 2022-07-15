import {ReactElement} from "react";
import TopNav from "./TopNav";


type LayoutProps = {
    children: ReactElement;
}

const Layout = ({children}: LayoutProps) => {

    return(
        <>
            <TopNav user_name={children.props.user_name}/>
            <div className={'main'} style={{backgroundColor: "#263747"}}>
                {children}
            </div>
        </>
    )
}
export default Layout
