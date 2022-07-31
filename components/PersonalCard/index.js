import { useState } from "react";
import { PersonalCardContainer, CardContent } from "../../styles/components/PersonalCards.style";
import { CardActionArea } from "@mui/material";

const PersonalCard = ({ colors }) => {
    const format = (s) => {
        return s.toString().replace(/\d{4}(?=.)/g, '$& ');
    };
    return (
        <PersonalCardContainer colorScheme={colors}>
            <CardActionArea>
                <CardContent>
                    <ul>
                        <li>AADHAAR</li>
                        <li>{format('514409725888')}</li>
                        <li>Male |  DOB: 03-02-1992</li>
                    </ul>
                </CardContent>
            </CardActionArea>
        </PersonalCardContainer>
    )
}
export default PersonalCard