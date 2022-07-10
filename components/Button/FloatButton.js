import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CustomFloatButton from '../../styles/FloatButton';

const FloatButton = () => {
    return (
        <CustomFloatButton>
            <Fab size="medium" aria-label="add">
            <AddIcon />
            </Fab>
        </CustomFloatButton>
    )
}

export default FloatButton