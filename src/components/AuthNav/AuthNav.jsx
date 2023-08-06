
import { StyledLink } from 'components/Layout/Layout.styled';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLang } from 'redux/selectors';
import { langEN, langUA } from 'utils/languages';


export const AuthNav = () => {

  const {token} = useAuth()
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

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
