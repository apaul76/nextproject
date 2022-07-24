import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    body, html {
     height: 100%;
    }
    body{
        margin:0px;
        background: url('images/background.png');
         height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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