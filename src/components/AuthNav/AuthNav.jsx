
import { StyledLink } from 'components/Layout/Layout.styled';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { useLanguage } from 'hooks/useLanguage';


export const AuthNav = () => {

  const {token} = useAuth()
  const lang = useLanguage()
  return (
    <StyledWrap>
     {token && <StyledLink  to="/register">
     {lang.regBtn}
      </StyledLink>}
      <StyledLink  to="/login">
      {lang.logBtn}
      </StyledLink>
    </StyledWrap>
  );
};
