import styled from 'styled-components';

const colorPicker = {
    orange: '#fe974b',
    violet: '#6752a8',
    blue: '#7770ff',
    breeze: '#7ba5ff',
    cremsy: '#f3665d'
}


const PersonalCardContainer = styled.div`
display: flex;
background: ${(props) => colorPicker[props.colorScheme]};
    border-radius: 10px;
    height: 196px;
    width: 100%;
    color: #ffff;
    box-shadow: 1px 4px 3px 0px #aba5a570;
    justify-content: end;
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
    &:hover{
        transform: scale(1.05);
    }
`
const CardContent = styled.div`
padding: 15px;
`

export {
    PersonalCardContainer,
    CardContent
}