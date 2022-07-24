import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    body{
        padding-top: 10px;
        margin:0px;
        background: #1f2d7c;
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