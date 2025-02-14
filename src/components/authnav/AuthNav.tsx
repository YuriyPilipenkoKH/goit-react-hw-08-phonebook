import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../hooks/useLanguage';
import { StyledWrap } from '../navigation/Navigation.styled';
import { StyledLink } from '../layout/Layout.styled';

const AuthNav = () => {
  const {token} = useAuth()
  const lang = useLanguage()
  return (
    <StyledWrap>
     {token && <StyledLink  to="/signup">
     {lang.regBtn}
      </StyledLink>}
      <StyledLink  to="/login">
      {lang.logBtn}
      </StyledLink>
    </StyledWrap>
  );
};

export default AuthNav