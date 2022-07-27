import PersonalCard from "../../components/PersonalCard";
import { DashBoardContainer,DashBoardContent} from "../../styles/container/dashboard/dashboard.style";

const DashBoard = () => {
    const personalcard = ["violet","breeze","cremsy"];
    return (
        <DashBoardContent>
            {
                personalcard.map(item => 
                    <DashBoardContainer>
                    <PersonalCard colors={item}/>
                    </DashBoardContainer>
                )
            }
        </DashBoardContent>
    )
}

export default DashBoard;