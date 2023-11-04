import { AppBar } from "components/AppBar/AppBar";
import { Suspense,} from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./Layout.styled";
import {  mirrorStream } from "utils/svgIcons";
import { useLanguage } from "hooks/useLanguage";


export const Layout = () => {
  const lang = useLanguage()

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