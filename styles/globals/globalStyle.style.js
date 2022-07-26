import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    body, html {
     height: 100%;
    }
    body{
        margin:0px;
        padding-top:10px;
        background: url('images/background.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        color:#ffff;
        & #simple-popover{
            & .MuiPopover-paper{
                background:#ffff!important;
                overflow:unset!important;
                border:1px solid white;
            }
        }
    }
`
export default GlobalStyle