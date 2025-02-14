import React, { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import AppBar from '../appbar/AppBar'
import MirrorStreamIcon from '../../utils/icons/mirrorStream'


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
          < MirrorStreamIcon />
        </MainFooter>
      </>
    )}

export default Layout