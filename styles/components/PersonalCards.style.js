import styled from 'styled-components';

const colorPicker = {
    orange: '#fe974b',
    violet: '#6752a8',
    blue:'#7770ff',
    breeze: '#7ba5ff',
    cremsy: '#f3665d'
}


const PersonalCardContainer = styled.div`
display: flex;
background: ${(props)=>colorPicker[props.colorScheme]};
border-radius: 10px;
height: 200px;
width: 100%;
color: #ffff;
box-shadow:1px 6px 10px 5px #aba5a570;
`

export {
    PersonalCardContainer
}