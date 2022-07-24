import styled from 'styled-components';

export const NavigationHeader = styled.header`
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
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
    background:#6236ff00;
    background-blend-mode: multiply;
`;

export const Wishme = styled.div`
span{
    font-size: 0.8em;
    font-weight: bold;
}
p{
    font-size:1.2rem;
    font-weight: bold;
    margin:0px
}
`

export const RoundedMenu = styled.div`
border-radius: 50%;
    width: 35px;
    height: 35px;
    background: #FFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
`