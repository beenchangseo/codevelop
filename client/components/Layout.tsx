import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return(
        <>
            <div className={'main'} style={{backgroundColor: "#263747"}}>
                {children}
            </div>
        </>
    )
}
export default Layout