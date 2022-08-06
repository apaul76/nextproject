import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle `
    html {
        scroll-behavior: smooth;
    }
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
        & .scrollbar-track{
            background:rgb(222 222 222 / 0%)!important;
        }
        & .scrollbar-thumb{
            width: 0px!important;
            height: 0px!important;
            background: rgb(0 0 0 / 0%)!important;
            border-radius: 0px!important;
        }
    }
`
export default GlobalStyle