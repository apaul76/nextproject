import PersonalCard from "../../components/PersonalCard";
import { DashBoardContainer,DashBoardContent} from "../../styles/container/dashboard/dashboard.style";

const DashBoard = () => {
    return (
        <DashBoardContainer>
            <PersonalCard />
        </DashBoardContainer>
    )
}

export default DashBoard;