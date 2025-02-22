import React from 'react'
import { StyledWrap } from './Navigation.styled';
import { StyledLink } from '../layout/Layout.styled';
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { MobileWrap } from '../appbar/AppBar.styled';
import { Link } from 'react-router-dom';
import { VscHome } from "react-icons/vsc";
import { GiSmartphone } from "react-icons/gi";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAuth();
  const lang = useLanguage()
  

  return (
    <>
    <StyledWrap >
      <StyledLink  to="/">
      {lang.homeBtn}
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/phonebook">
         {lang.contactsBtn}
        </StyledLink>
      )}

    </StyledWrap>

    <MobileWrap>
    <Link  to="/">
        <VscHome size={25}/>
      </Link>

      {isLoggedIn && (
        <Link to="/phonebook">
         <GiSmartphone size={25}/>
        </Link>
      )}
    </MobileWrap>
    </>
  );
};

export default Navigation