import styled from 'styled-components';

const PopOverContainer = styled.div`
    & #simple-popover{
        & div{
            overflow: unset;
            overflow-y:unset;
        }
    }

`

const PopOverFormContainer = styled.div`
    padding: 10px;
    & form{
        border-radius: 22px;
        height: 35px;
        background: #efefef;
        box-shadow: none;
        padding: 2px;
        border: 1px dashed #b1b0b0;
        & ::placeholder{
            font-size:0.85rem!important;
            font-weight:500;
        }
    }

`
const CloseButtonContainer = styled.div`   
position: absolute;
right: -7px;
top: -8px;
color: #505050;
cursor:pointer;
`
const ArrowTopContainer = styled.div`   
position: absolute;
    top: -33px;
    color: #ffff;
    left:45%;
    & svg{
        font-size:3.5rem
    }
`

export {
    PopOverFormContainer,
    CloseButtonContainer,
    PopOverContainer,
    ArrowTopContainer
}