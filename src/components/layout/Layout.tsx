import { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import AppBar from '../appbar/AppBar'
import MirrorStreamIcon from '../../img/icons/mirrorStream'
import { useLanguage } from '../../hooks/useLanguage'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { logOut } from '../../redux/auth/operations'




const Layout = () => {
  const lang = useLanguage()
    const dispatch = useAppDispatch();
    
const quit =() => {
  dispatch(logOut( 'Dude'))
}
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
          <button 
          className='quit'
          type='button' 
          onClick={quit}>—</button>
          {'2025'}
          < MirrorStreamIcon />
        </MainFooter>
      </>
    )}

export default Layout