import { NavigationHeader } from '../../styles/components/NavigationMenu.style';
import NavBarWidget from './NavBarWidget';


const NavBar = () => {
    return (
        <NavigationHeader>
           <NavBarWidget title="My Wallet"/>
        </NavigationHeader>
    );
}

export default NavBar