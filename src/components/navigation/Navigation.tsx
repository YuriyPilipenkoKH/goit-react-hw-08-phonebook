import React from 'react'
import { StyledWrap } from './Navigation.styled';
import { StyledLink } from '../layout/Layout.styled';
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAuth();
  const lang = useLanguage()
  

  return (
    <StyledWrap >
      <StyledLink  to="/">
      {lang.homeBtn}
      </StyledLink>
        {/* <button type='button' 
        onClick={()=>dispatch(logOut())}>
          {lang.out}
          </button> */}
      {isLoggedIn && (
        <StyledLink to="/phonebook">
         {lang.contactsBtn}
        </StyledLink>
      )}
    </StyledWrap>
  );
};

export default Navigation