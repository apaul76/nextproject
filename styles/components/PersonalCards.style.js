import styled from 'styled-components';

const colorPicker = {
    violet: '#6752a8',
    breeze: '#7ba5ff',
    cremsy: '#f3665d',
    blue: 'images/blue.png',
    purple: 'images/pur.png',
    green: 'images/green.png',
}

const postion = {
    blue: 'right',
    purple: 'bottom',
    green: 'top',
}

const PersonalCardContainer = styled.div`
display: flex;
background: url(${(props) => colorPicker[props.colorScheme]});
background-position: ${(props) => postion[props.colorScheme]};
    border-radius: 10px;
    height: 196px;
    width: 100%;
    color: #ffff;
    box-shadow: 1px 4px 3px 0px #aba5a570;
    justify-content: end;
    transition: transform 300ms;
    & ul {
        list-style:none;
        text-align: right;
        margin: 0px;
        word-spacing: 4px;
        letter-spacing: 2px;
        & li {
            margin-bottom: 35px;
            z-index: -1;
        }
        & li:nth-child(2){
            font-size: 1.8rem;
            margin-top: 3rem;
        }
        & li:nth-child(3){
            font-size: 0.84rem;
            margin-top: 3rem;
            margin-bottom: 0px;
        }
    }
    & .cardMenu{
        display: none!important;
    }
    &:hover{
        transform: scale(1.05);
        & .cardMenu{
            transition: width 1s ease-in-out;
            border-radius: 0px 10px 10px 0px;
            z-index: 100;
            position: absolute;
            background: #4a4747e6;
            height: 196px;
            display: flex!important;
            transition: width 0.5s ease-in-out;
            width:20%;
            justify-content: center;
            align-items:center;
            & ul{
                padding: 0px;
                & li{
                    line-height: 22px;
                    margin-bottom: 24px;
                    margin-top: 29px;
                }
                
            }
            pointer-events: none;
        }
    }
    & button{
        &:focus{
            filter:blur(2px);
            background:#6a6a6a5e;
           
        }
    }
    @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
`
const CardContent = styled.div`
padding: 15px;
`

export {
    PersonalCardContainer,
    CardContent
}