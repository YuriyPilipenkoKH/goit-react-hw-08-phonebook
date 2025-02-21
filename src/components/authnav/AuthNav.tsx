import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../hooks/useLanguage';
import { StyledWrap, Wrap } from '../navigation/Navigation.styled';
import { StyledLink } from '../layout/Layout.styled';
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';

const AuthNav = () => {
  const {token} = useAuth()
  const lang = useLanguage()
  return (
    <>
      <StyledWrap>
       {token && <StyledLink  to="/signup">
       {lang.regBtn}
        </StyledLink>}
        <StyledLink  to="/login">
        {lang.logBtn}
        </StyledLink>
      </StyledWrap>
      <Wrap>
        <Link to="/login">
        <MdLogin size={30}/>
        </Link>
      </Wrap>
    </>
  );
};

export default AuthNav