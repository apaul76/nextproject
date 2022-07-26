import { PersonalCardContainer } from "../../styles/components/PersonalCards.style";

const PersonalCard = () => {
    const format = (s) => {
        return s.toString().replace(/\d{4}(?=.)/g, '$& ');
    }
    return (
        <PersonalCardContainer colorScheme="blue">
            <ul>
                <li>AADHAAR</li>
                <li>{format('515105725637')}</li>
                <li>Male |  DOB: 03-02-1992</li>
            </ul>
        </PersonalCardContainer>
    )
}
export default PersonalCard