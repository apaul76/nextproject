import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    body, html {
     height: 100%;
    }
    body{
        margin:0px;
        background: #4C3F91;
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