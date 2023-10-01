import { HomeTitle, HomeWrapper } from "./Pages.styled";
import { langEN, langUA } from "utils/languages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLang } from "redux/selectors";
import Lottie from "lottie-react";
import animationData  from '../assets/animation_lma84pgg.json'



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
          <Lottie animationData={animationData} className="football-player" />

      </HomeWrapper>
    );
  }