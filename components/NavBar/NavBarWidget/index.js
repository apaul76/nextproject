import UserMenuWidget from "./UserMenuWidzet";
import {
     Toolbar,
     Typography,
     IconButton
 } from "@mui/material";
 import MenuIcon from '@mui/icons-material/Menu';
 import {Wishme} from '../../../styles/components/NavigationMenu.style';

const NavBarWidget = ({title}) => {
    return (
        <Toolbar className="toolbar">
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon/>
            </IconButton> */}
            <Typography variant="h6" noWrap component="span" sx={{ flexGrow: 1 }}>
               <Wishme>
                <span>Good Morning!</span>
                <p>Avijit P.</p>
               </Wishme>
            </Typography>
            <UserMenuWidget />
        </Toolbar>
    )
}

export default NavBarWidget