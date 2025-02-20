import { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import AppBar from '../appbar/AppBar'
import MirrorStreamIcon from '../../img/icons/mirrorStream'
import { useLanguage } from '../../hooks/useLanguage'
import ErrorBoundary from '../errorboundary/ErrorBoundary'



const Layout = () => {
  const lang = useLanguage()

    return (
    <>
      <MainHeader  className="main-header" >
        <AppBar/>
      </MainHeader>
        <Suspense >
            <Outlet />
        </Suspense>
        <MainFooter >
          {lang.footerTitle} 
          < MirrorStreamIcon />
        </MainFooter>
      </>
    )}

export default Layout