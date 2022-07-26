import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle `
    body, html {
     font-family: 'Roboto Slab', serif;
     /*font-family: 'Titillium Web', sans-serif;*/
    }
    body{
        margin:0px;
        padding-top:10px;
        background:#eaf0f7;
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