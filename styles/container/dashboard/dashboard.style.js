import styled from 'styled-components';

const DashBoardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin: 20px 16px 20px 16px;
`

const DashBoardContent =  styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    margin-top: 17%;
`

const Carousel = styled.div`
        margin: 1rem auto;
        & span {
            padding: 0px 7px 0px 7px;
        }
        & span:nth-child(even){
            padding: 0px;
        }
`

export {
    DashBoardContainer,
    DashBoardContent,
    Carousel,
}