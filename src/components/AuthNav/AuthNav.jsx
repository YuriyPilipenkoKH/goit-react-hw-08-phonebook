
import { StyledLink } from 'components/Layout/Layout.styled';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';


export const AuthNav = () => {

  const {token} = useAuth()
  console.log(token)

  return (
    <StyledWrap>
     {token && <StyledLink  to="/register">
        Register
      </StyledLink>}
      <StyledLink  to="/login">
        LogIn
      </StyledLink>
    </StyledWrap>
  );
};
