import styled from 'styled-components';

export const NavigationHeader = styled.header`
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px,
    rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: static;
    color: rgb(255, 255, 255);
    & .toolbar{
        min-height: 50px;
    }
    background:url('./images/pattern.png') #1e1e5a;
    background-blend-mode: multiply;
`;