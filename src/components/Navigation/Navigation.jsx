import { useAuth } from "hooks/useAuth";
import { StyledLink } from "components/Layout/Layout.styled";
import { StyledWrap } from "components/UserMenu/UserMenu.styled";
import { useEffect, useState } from "react";
import { langEN, langUA } from "utils/languages";
import { getLang } from "redux/selectors";
import { useSelector } from "react-redux";


export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    const [lang, setLang] = useState(langUA)
    const language = useSelector(getLang)
   
    // Language
    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

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