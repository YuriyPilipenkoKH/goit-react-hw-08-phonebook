import { useAuth } from "hooks/useAuth";
import { StyledLink } from "components/Layout/Layout.styled";
import {  StyledWrap } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <StyledWrap >
        <StyledLink to="/">
          Home
        </StyledLink>
        {isLoggedIn && (
          <StyledLink  to="/phonebook">
           Contacts
          </StyledLink>
        )}
      </StyledWrap>
    );
  };