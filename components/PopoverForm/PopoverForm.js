import { useContext } from 'react';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { PopOverFormContainer, CloseButtonContainer, PopOverContainer, ArrowTopContainer } from '../../styles/components/PopoverForm.style';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ServicingContext from '../../pages/context';
import axios from 'axios';
import {load}  from 'cheerio';

const PopoverForm = ({ show, handlePopUp, eventTag, handleCurrentEvent, openEvent, id }) => {
    const { setShowBackdrop } = useContext(ServicingContext);
    const linksKey = {
        favicon:[
            "shortcut icon",
            "SHORTCUT ICON",
        ]
    }
    const arrayt = ["1231","english"];
    const handleClose = () => {
        handlePopUp(false);
        handleCurrentEvent(null)
        setShowBackdrop(false)
    }
    const handleInput = async (e) => {
        const scrapDataSet = {
            title:'',
            metaTags:[],
            favicon:{},
        }
        setShowBackdrop(true);
        let json_data=   await axios.get('https://cors-anywhere.herokuapp.com/https://www.javatpoint.com/html-favicon')
        .then(response => response.data);
        let $ = load(json_data);
        let title = $('title');
        let meta = $('meta');
        let link = $('link');
        scrapDataSet.title = title[0].children[0].data;
        console.log(json_data)
        meta.map(item => scrapDataSet.metaTags.push(meta[item].attribs))
        scrapDataSet.favicon = {...link.filter(item => linksKey.favicon.includes(link[item].attribs.rel))[0].attribs};
        console.log(scrapDataSet)
        console.log(link)
    }
    return (
        <PopOverContainer>
            <Popover
                id={id}
                open={show}
                anchorEl={eventTag}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <PopOverFormContainer>
                    <ArrowTopContainer>
                        <ArrowDropUpIcon fontSize="medium" />
                    </ArrowTopContainer>
                    <CloseButtonContainer>
                        <CancelIcon onClick={handleClose} />
                    </CloseButtonContainer>
                    <Paper
                        component="form"
                        sx={{ p: '0px', display: 'flex', alignItems: 'center', width: 400, overflow: 'unset!important' }}
                        elevation={3}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Paste your url"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search"  onClick={(e) => handleInput(e)}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </PopOverFormContainer>
            </Popover>
        </PopOverContainer>
    );
}

export default PopoverForm;