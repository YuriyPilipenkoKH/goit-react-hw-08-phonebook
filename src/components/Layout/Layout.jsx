import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./Layout.styled";
import { iconReactHook } from "utils/svgIcons";

export const Layout = () => {
    return (
        <>
        <MainHeader className="main-header">
        <AppBar/>
        </MainHeader>
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter>React-Phonebook-2023 { iconReactHook } </MainFooter>
          </>
    )}