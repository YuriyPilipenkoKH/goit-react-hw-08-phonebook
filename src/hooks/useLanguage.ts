import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLang } from "../redux/selectors/selectors";
import { langEN, langUA } from "../lang/languages";
import { validateTranslationKeys } from "../lang/langValidation";



export const useLanguage = (): Record<string, string> => {
  const [lang, setLang] = useState<Record<string, string>>(langEN);
  const language = useSelector(getLang);

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
      validateTranslationKeys(langEN, langUA)
    }, [language])

    return lang
}