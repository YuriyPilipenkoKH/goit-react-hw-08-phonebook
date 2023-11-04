import { useAuth } from "hooks/useAuth";
import { StyledLink } from "components/Layout/Layout.styled";
import { StyledWrap } from "components/UserMenu/UserMenu.styled";
import { useLanguage } from "hooks/useLanguage";


export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    const lang = useLanguage()

    return (
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
    );
  };