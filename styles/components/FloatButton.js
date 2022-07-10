
import styled from 'styled-components';

const CustomFloatButton = styled.div`
display: inline-flex;
position: fixed;
bottom: 24px;
right: 24px;
& button{
    background:#1e1e5a;
    color:#ffff;
    &:hover{
        background:#151540;
        color:#ffff;
    }
}
`

export default CustomFloatButton;