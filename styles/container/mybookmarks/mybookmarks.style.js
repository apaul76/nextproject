import styled from 'styled-components';

const MyBookMarkContainer = styled.div`
    display:flex;
    padding:30px;
    margin:30px;
    flex-wrap: wrap;
`;

const BookMarkSelectorContainer = styled.div`
    width: 200px;
    height: 200px;
    display:flex;
    flex-wrap: wrap;
    padding: 22px;
`;

const BookMarkSelector = styled.div`
    width:100%;
    border:1px dashed white;
    background-position: center;
    background-repeat: no-repeat;
    background: #1e1e5a38;
    justify-content: center;
    align-items: center;
    display:flex;
    & div{
        text-align: center;
        display: inline-block;
        width: 120px;
        height: 120px;
        padding: 15px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(30px);
        box-shadow: 0 6px 25px rgb(0 0 0 / 13%);
        display: flex;
        justify-content: center;
        align-items: center;
        & svg{
            font-size:4rem;
            color:#ffff;
            cursor:pointer;
        }
    }

`;


export {
    MyBookMarkContainer,
    BookMarkSelectorContainer,
    BookMarkSelector
}