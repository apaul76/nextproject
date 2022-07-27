import { PersonalCardContainer } from "../../styles/components/PersonalCards.style";

const PersonalCard = ({colors}) => {
    const format = (s) => {
        return s.toString().replace(/\d{4}(?=.)/g, '$& ');
    }
    return (
        <PersonalCardContainer colorScheme={colors}>
            <ul>
                <li>AADHAAR</li>
                <li>{format('514409725888')}</li>
                <li>Male |  DOB: 03-02-1992</li>
            </ul>
        </PersonalCardContainer>
    )
}
export default PersonalCard