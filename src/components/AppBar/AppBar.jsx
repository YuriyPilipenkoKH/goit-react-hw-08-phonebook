import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { StyledHeader, ThemeBtn } from "./AppBar.styled";
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { getTheme } from "redux/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "redux/themeSlice";

export const AppBar = () => {

  // console.log(thema)
    const { isLoggedIn } = useAuth();
    const theme = useSelector(getTheme)
    const dispatch = useDispatch()

  
    return (
      <StyledHeader >
        <Navigation />

        <ThemeBtn 
        onClick={() => dispatch(toggleTheme())}
        type="button"
      
        >
          {theme === 'light'
          ? <MdOutlineLightMode size={30}/>
          : <MdOutlineNightlight size={30}/>
          }
        </ThemeBtn>
        
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledHeader>
    );
  };