import { useState } from "react";
import { PersonalCardContainer, CardContent } from "../../styles/components/PersonalCards.style";
import { CardActionArea } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';

const PersonalCard = ({ colors, cardInformation }) => {
    const format = (s) => {
        let res = [...s].map((d, i) => (i) % (s.length > 8 ? 4 : 3 ) == 0 ? ' ' + d : d).join('').trim()
        console.log(res)
        return res;
    };
    return (
        <>
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
            <div className="cardMenu">
                <ul>
                    <li>
                        <SettingsIcon/>
                    </li>
                    <li>
                        <VisibilityIcon/>
                    </li>
                    <li>
                        <img src="images/qr-code.png" width="27px"/>
                    </li>
                </ul>
            </div>
        </PersonalCardContainer>
        </>
    )
}
export default PersonalCard