import { AppBar } from "components/AppBar/AppBar";
import { Suspense, useEffect, useState } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./Layout.styled";
import {  mirrorStream } from "utils/svgIcons";
import { langEN, langUA } from "utils/languages";
import { getLang } from "redux/selectors";
import { useSelector } from "react-redux";



export const Layout = () => {
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

    return (
        <>
        <MainHeader  className="main-header" >
        <AppBar/>
        </MainHeader>
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter >{lang.footerTitle} { mirrorStream } </MainFooter>
          </>
    )}