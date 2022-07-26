import styled from 'styled-components';

const colorPicker = {
    orange: '#fe974b',
    violet: '#6752a8',
    blue:'#7770ff',
    breeze: '#7ba5ff',
    cremsy: '#f3665d'
}


const PersonalCardContainer = styled.div`
background-color: ${(props) => colorPicker[props.colorScheme]};
color: rgba(0, 0, 0, 0.87);
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 20%) 1px 3px 7px 4px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
overflow: hidden;
width: 100%;
height:200px;
`

export {
    PersonalCardContainer
}