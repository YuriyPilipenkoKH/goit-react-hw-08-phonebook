import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { LangBtn,  MobileWrap, StyledHeader, ThemeBtn, Wrap } from './AppBar.styled';
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

import ThemeChanger from '../button/ThemeChanger';

const AppBar = () => {

  const {  token } = useAuth();
  const dispatch = useAppDispatch()

  const language = useSelector(getLang)


  const languageInvertor =(language:languageTypes) => {
   return  language === 'english' ?  'ukrainian'  :  'english'
  }


  const languageMaker =() => {
    localStorage.setItem('language', languageInvertor(language))
    dispatch(toggleLang())
  }

  return (
    <StyledHeader >
      <Navigation />

      <Wrap className='TL_center'>
        <LangBtn
        onClick={languageMaker}
        type="button">
        {(localStorage.getItem('language' ) || language) === 'english' ?  'EN' :  'UA'}
        </LangBtn>

        <ThemeChanger/>
        
      </Wrap>
        {token ? <UserMenu /> : <AuthNav />}
      {/* <MobileWrap>
          <MobileMenu />
      </MobileWrap> */}
    </StyledHeader>
  );
};

export default AppBar