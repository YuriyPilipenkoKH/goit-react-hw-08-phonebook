import React from 'react'
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { LangBtn, StyledHeader, ThemeBtn } from './AppBar.styled';

const AppBar = () => {

  // const { isLoggedIn } = useAuth();
  // const theme = useSelector(getTheme)

  // const dispatch = useDispatch()
  // const language = useSelector(getLang)

  // const themeInvertor =(theme) => {
  //  return  theme === 'light' ?  'dark'  :  'light'
  // }
  // const languageInvertor =(language) => {
  //  return  language === 'english' ?  'ukrainian'  :  'english'
  // }

  // const themeMaker =() => {
  //   localStorage.setItem('theme', themeInvertor(theme))
    // dispatch(toggleTheme())
  // }
  // const languageMaker =() => {
  //   localStorage.setItem('language', languageInvertor(language))
  //   dispatch(toggleLang())
  // }

  return (
    <StyledHeader >
      <Navigation />

      <LangBtn  
      // onClick={languageMaker}
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