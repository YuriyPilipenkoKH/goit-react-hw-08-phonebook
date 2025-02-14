import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { LangBtn, StyledHeader, ThemeBtn } from './AppBar.styled';
import Navigation from '../navigation/Navigation';
import {  useSelector } from 'react-redux';
import { getLang, getTheme } from '../../redux/selectors/selectors';
import { toggleTheme } from '../../redux/themeSlice';
import { toggleLang } from '../../redux/langSlice';
import { useAuth } from '../../hooks/useAuth';
import { languageTypes, themeTypes } from '../../types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import UserMenu from '../usermenu/UserMenu';
import AuthNav from '../authnav/AuthNav';

const AppBar = () => {

  const { isLoggedIn } = useAuth();
  const theme = useSelector(getTheme)

  const dispatch = useAppDispatch()
  const language = useSelector(getLang)

  const themeInvertor =(theme:themeTypes) => {
   return  theme === 'light' ?  'dark'  :  'light'
  }
  const languageInvertor =(language:languageTypes) => {
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
      {(localStorage.getItem('language' ) || language) === 'english' ?  'EN' :  'UA'}
      </LangBtn>

      <ThemeBtn 
      onClick={themeMaker}
      type="button"
    
      >
        {(localStorage.getItem('theme') || theme) === 'light'
        ? <MdOutlineLightMode size={30}/>
        : <MdOutlineNightlight size={30}/>
        }
      </ThemeBtn>
      
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};

export default AppBar