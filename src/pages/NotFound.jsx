import {  coyote404} from "utils/svgIcons";
import { Page404 } from "./Pages.styled";
import { useEffect, useState } from "react";
import { langEN, langUA } from "utils/languages";
import { useSelector } from "react-redux";
import { getLang } from "redux/selectors";

export const NotFound = () => {

  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])


    return (
      <Page404 >
        <b > {lang.sorry} </b>
        {coyote404}
      </Page404>
    );
  };
  