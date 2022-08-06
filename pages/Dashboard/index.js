import PersonalCard from "../../components/PersonalCard";
import { DashBoardContainer,DashBoardContent} from "../../styles/container/dashboard/dashboard.style";
import { SmoothProvider } from "react-smooth-scrolling";


const DashBoard = () => {
    const personalcard = ["purple","blue","green"];
    const cardDetails = [
        {
            title:"AADHAAR",
            cardno: "514409725828",
            otherinfo: [
                "Male",
                "DOB: 03-02-1992"
            ]
        },
        {
            title:"PAN",
            cardno: "AXZPY7387Q",
            otherinfo: [
                "Male",
                "DOB: 03-02-1992"
            ]
        },
        {
            title:"PASSPORT",
            cardno: "Z4300011",
            otherinfo: [
                "INDIAN",
                "EXP: 27-01-2023"
            ]
        }
    ]
    return (
        <SmoothProvider skew={true}>
        <DashBoardContent>
            {
                cardDetails.map((item , index) => 
                    {
                        return (
                            <DashBoardContainer>
                            <PersonalCard
                            colors={personalcard[index]}
                            cardInformation={item}
                            index={index}
                            />
                            </DashBoardContainer>
                        )
                    }
                )
            }
        </DashBoardContent>
        </SmoothProvider>
    )
}

export default DashBoard;