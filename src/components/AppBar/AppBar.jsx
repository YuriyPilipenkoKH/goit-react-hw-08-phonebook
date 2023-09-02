import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { LangBtn, StyledHeader, ThemeBtn } from "./AppBar.styled";
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { getLang, getTheme } from "redux/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "redux/themeSlice";
import { toggleLang } from "redux/langSlice";

export const AppBar = () => {


    const { isLoggedIn } = useAuth();
    const theme = useSelector(getTheme)

    const dispatch = useDispatch()
    const language = useSelector(getLang)

    const themeInvertor =(theme) => {
     return  theme === 'light' ?  'dark'  :  'light'
    }
    const languageInvertor =(language) => {
     return  language === 'english' ?  'ukrainian'  :  'english'
    }

    const themeMaker =() => {
      localStorage.setItem('theme', themeInvertor(theme))
      dispatch(toggleTheme())
    }
    const languageMaker =() => {
      localStorage.setItem('language', languageInvertor(language))
      dispatch(toggleLang())
    }
  
    return (
      <StyledHeader >
        <Navigation />

        <LangBtn  
        onClick={languageMaker}
        type="button">
        {language === 'english' ?  'EN' :  'UA'}
        </LangBtn>

        <ThemeBtn 
        onClick={themeMaker}
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