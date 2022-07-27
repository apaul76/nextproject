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
    position: fixed;
    top: 0;
    background: #eaf0f7;
    padding-top: 15px;
    background-blend-mode: multiply;
`;

export const Wishme = styled.div`
span{
    font-size: 0.8em;
    font-weight: bold;
    color: #525151;
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
    box-shadow: 1px 2px 7px #808080b5;
}
`