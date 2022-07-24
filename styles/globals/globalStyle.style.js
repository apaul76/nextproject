import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    body{
        margin:0px;
        background:#111427;
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