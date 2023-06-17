
import { StyledLink } from 'components/Layout/Layout.styled';
import { StyledWrap } from 'components/Navigation/Navigation.styled';


export const AuthNav = () => {
  return (
    <StyledWrap>
      <StyledLink  to="/register">
        Register
      </StyledLink>
      <StyledLink  to="/login">
        LogIn
      </StyledLink>
    </StyledWrap>
  );
};
