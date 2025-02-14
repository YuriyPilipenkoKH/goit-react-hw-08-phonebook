import React from 'react'
import { StyledWrap } from './Navigation.styled';
import { StyledLink } from '../layout/Layout.styled';

const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  // const lang = useLanguage()

  return (
    <StyledWrap >
      <StyledLink  to="/">
      {/* {lang.homeBtn} */}
      </StyledLink>
      {/* {isLoggedIn && (
        <StyledLink to="/phonebook">
         {lang.contactsBtn}
        </StyledLink>
      )} */}
    </StyledWrap>
  );
};

export default Navigation