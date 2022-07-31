import { useState } from "react";
import { PersonalCardContainer, CardContent } from "../../styles/components/PersonalCards.style";
import { CardActionArea } from "@mui/material";

const PersonalCard = ({ colors, cardInformation }) => {
    const format = (s) => {
        let res = [...s].map((d, i) => (i) % (s.length > 8 ? 4 : 3 ) == 0 ? ' ' + d : d).join('').trim()
        console.log(res)
        return res;
    };
    return (
        <PersonalCardContainer colorScheme={colors}>
            <CardActionArea>
                <CardContent>
                    <ul>
                        <li>{cardInformation.title}</li>
                        <li>{format(cardInformation.cardno)}</li>
                        <li>
                            {cardInformation.otherinfo.map((item, index) => { return `${item} ${index !== (cardInformation.otherinfo.length - 1) ? '|' : ''} ` })}
                        </li>
                    </ul>
                </CardContent>
            </CardActionArea>
        </PersonalCardContainer>
    )
}
export default PersonalCard