import { Children, Fragment, useContext, useState } from "react";
import NavBar from "../NavBar";
import Backdrop from '@mui/material/Backdrop';
import ServicingContext from "../../context/context";
import GlobalStyle from "../../styles/globals/globalStyle.style";


const PageContainerWrapper = (props) => {
    const { show } = useContext(ServicingContext);
    const backDropTheme={
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1
    }
    return (
        <Fragment>
            <GlobalStyle />
            <Backdrop
                sx={backDropTheme}
                open={show}
            />
            <NavBar />
            {props.children}
        </Fragment>
    )
}

export default PageContainerWrapper;