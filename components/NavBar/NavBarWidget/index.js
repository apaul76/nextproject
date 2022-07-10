import UserMenuWidget from "./UserMenuWidzet";
import {
     Toolbar,
     Typography,
     IconButton
 } from "@mui/material";
 import MenuIcon from '@mui/icons-material/Menu';

const NavBarWidget = ({title}) => {
    return (
        <Toolbar className="toolbar">
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon/>
            </IconButton> */}
            <Typography variant="h6" noWrap component="span" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
            <UserMenuWidget />
        </Toolbar>
    )
}

export default NavBarWidget