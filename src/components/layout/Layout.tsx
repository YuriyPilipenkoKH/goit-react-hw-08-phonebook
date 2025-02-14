import React, { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import AppBar from '../appbar/AppBar'


const Layout = () => {
  // const lang = useLanguage()

    return (
        <>
        <MainHeader  className="main-header" >
        <AppBar/>
        </MainHeader>
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter >
          {/* {lang.footerTitle}  */}
          { mirrorStream }
           </MainFooter>
          </>
    )}

export default Layout