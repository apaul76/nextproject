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
    height: 165px;
    width: 100%;
    color: #ffff;
    box-shadow: 1px 4px 3px 0px #aba5a570;
    padding: 15px;
    justify-content: end;
    & ul {
        list-style:none;
        text-align: right;
        margin: 0px;
        word-spacing: 4px;
        letter-spacing: 2px;
        & li {
            margin-bottom: 35px;
        }
        & li:nth-child(2){
            font-size: 1.8rem;
        }
        & li:nth-child(3){
            font-size: 0.84rem;
            margin-top: 2.7rem;
        }
    }
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
`

export {
    PersonalCardContainer
}