import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./Layout.styled";
import { iconReactHook } from "utils/svgIcons";
import { useSelector } from "react-redux";
import { getTheme } from "redux/selectors";


export const Layout = () => {
  const theme = useSelector(getTheme)

    return (
        <>
        <MainHeader  className="main-header" theme = {theme}>
        <AppBar/>
        </MainHeader>
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter theme = {theme}>React-Phonebook-2023 { iconReactHook } </MainFooter>
          </>
    )}