import { HomeTitle, HomeWrapper } from "./Pages.styled";
import { langEN, langUA } from "utils/languages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLang } from "redux/selectors";



export default function Home() {
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])
 
    return (
      <HomeWrapper  >
        <HomeTitle  >
        Progressive {lang.appTitle}  
        </HomeTitle>
        <span>
        {lang.appUnderTitle}
          </span>

      </HomeWrapper>
    );
  }