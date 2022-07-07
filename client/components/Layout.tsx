import {ReactNode} from "react";
import TopNav from "./TopNav";

type Props = {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return(
        <>
            <TopNav/>
            <div className={'main'} style={{backgroundColor: "#263747"}}>
                {children}
            </div>
        </>
    )
}
export default Layout