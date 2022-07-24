import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    body{
        margin: 0px;
            padding-top: 16px;
        background: url(images/background.jpg);
        color: #ffff;
        background-size: cover;
        -webkit-backdrop-filter: brightness(0.35);
        backdrop-filter: brightness(0.45);
        height: 755px;
        color: #ffff;
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