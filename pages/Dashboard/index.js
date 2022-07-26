import {useState} from 'react';
import PersonalCard from "../../components/PersonalCard";
import { DashBoardContainer, Carousel } from "../../styles/container/dashboard/dashboard.style";
import Radio from '@mui/material/Radio';
import { blueGrey } from '@mui/material/colors';

const DashBoard = () => {
    const [selectedValue, setSelectedValue] = useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    
      const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
      });
    return (
        <DashBoardContainer>
            <PersonalCard />
            <Carousel>
            <Radio {...controlProps('a')} size="small" sx={{
          color: blueGrey[800],
          '&.Mui-checked': {
            color: blueGrey[600],
          },
        }}/>
            <Radio {...controlProps('b')} size="small" sx={{
          color: blueGrey[800],
          '&.Mui-checked': {
            color: blueGrey[600],
          },
        }}/>
            <Radio {...controlProps('c')} size="small" sx={{
          color: blueGrey[800],
          '&.Mui-checked': {
            color: blueGrey[600],
          },
        }}/>
            </Carousel>
        </DashBoardContainer>
    )
}

export default DashBoard;