import { useAuth } from "hooks/useAuth";
import { StyledLink } from "components/Layout/Layout.styled";
import { StyledWrap } from "components/UserMenu/UserMenu.styled";
import { useSelector } from "react-redux";
import { getTheme } from "redux/selectors";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    const theme = useSelector(getTheme)
  
    return (
      <StyledWrap >
        <StyledLink theme = {theme} to="/">
          Home
        </StyledLink>
        {isLoggedIn && (
          <StyledLink theme = {theme} to="/phonebook">
           Contacts
          </StyledLink>
        )}
      </StyledWrap>
    );
  };