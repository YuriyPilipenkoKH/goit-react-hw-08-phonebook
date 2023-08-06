// import { Translation } from "react-i18next";
import { HomeTitle, HomeWrapper } from "./Pages.styled";
// import CommentComponent from "components/CommentComponent/CommentComponent";
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
         {lang.appTitle}  
        </HomeTitle>
        <span>
        {lang.appUnderTitle}
          </span>

        {/* <div>
      <h1>
        <Translation>{(t) => t("appTitle")}</Translation>
      </h1>
      <p>
        <Translation>{(t) => t("welcomeMessage")}</Translation>
      </p>
    </div> */}

    {/* <CommentComponent></CommentComponent> */}

      </HomeWrapper>
    );
  }