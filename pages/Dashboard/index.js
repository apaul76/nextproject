import { useEffect } from "react";
import PersonalCard from "../../components/PersonalCard";
import { DashBoardContainer,DashBoardContent} from "../../styles/container/dashboard/dashboard.style";
import Scrollbar from 'smooth-scrollbar';

const DashBoard = () => {
    const personalcard = ["purple","blue","green"];
    const cardDetails = [
        {
            title:"AADHAAR",
            cardno: "514409725728",
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
    useEffect(()=>{
        Scrollbar.init(document.querySelector('#my-scrollbar'), {
            damping:0.1,
            thumbMinSize: 20,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling:true,
        });
    })
    return (
        <DashBoardContent id="my-scrollbar" style={{ height:'84vh'}}>
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
    )
}

export default DashBoard;