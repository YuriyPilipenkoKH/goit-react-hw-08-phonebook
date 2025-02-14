import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLang } from "../redux/selectors/selectors";
import { langEN, langUA } from "../utils/languages";



export const useLanguage = () => {
    const [lang, setLang] = useState(langUA)
    const language = useSelector(getLang)

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

    return lang
}