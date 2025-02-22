import  { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../hooks/useAuth';
import { AuthResponse, logOut } from '../../redux/auth/operations';
import { DropdownMenu, MainMenu, MenuBtn, MenuItem, SliderBtn, StyledWrap, UserName, UserWrapp } from './UserMenu.styled';
import { FaWindowClose } from 'react-icons/fa';
import {  AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Loader from '../loader/Loader.tsx';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { MobileWrap, Wrap } from '../appbar/AppBar.styled.tsx';
import LangChanger from '../button/LangChanger.tsx';
import ThemeChanger from '../button/ThemeChanger.tsx';
import { Notify } from 'notiflix';
import capitalize from '../../utils/capitalize.ts';
import AvatarUploadForm from '../forms/AvatarUploadForm.tsx';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { user, isLoggedIn, isLoading, isAdmin} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const lang = useLanguage()




const quit =() => {
   setIsOpen(!isOpen)
   dispatch(logOut(user?.name || 'Dude'))
   .then((res) => {
    if(res.type === 'auth/logout/fulfilled' && (res.payload as AuthResponse).success){
       Notify.success(`${lang.bye}, ${capitalize(user?.name)}`)
    }
   })
}

  return (
    <MainMenu className='mainMenu'>
      {isLoading && <Loader/>}
      {isLoggedIn && (
        <StyledWrap>
          <div className='avatar__wrapp-sm'>
          <img
          src={user?.image}
          alt="Profile image"
          className="userimage"
        />
          </div>
        
          <UserWrapp >
            <Wrap>
              <UserName >{user?.name}</UserName>
            </Wrap>
            <MenuBtn
             type='button'
             onClick={() => setIsOpen(!isOpen)}
            
             > 
              { isOpen ?  <FaWindowClose/> : <AiOutlineCaretDown/> }</MenuBtn>
          </UserWrapp>
          {isOpen && (
        <DropdownMenu className="dropdown-menu">

          <AvatarUploadForm/>
            {user?.email}

            {isAdmin &&(
            <MenuItem 
              className="admin-button"
              onClick={() => setIsOpen(!isOpen)}
              type='button'>
              <Link to="/admin" className="button-link">
                {lang.admin}
              </Link>
            </MenuItem>
               )}
            <MenuItem type='button' onClick={quit}>
              {lang.out}
            </MenuItem>
              <MobileWrap>
              <LangChanger/>
              <ThemeChanger/>
              </MobileWrap>
        
        </DropdownMenu>
      )}

        </StyledWrap>
      )}
    </MainMenu>
  );
}
export default UserMenu


//      <MenuItem 
//      className="profile-button"
 //     type='button'> 
//      <Link
//      className="profile-link"
//      onClick={() => setIsOpen(!isOpen)}
//      to="/profile">
//      {lang.profile}
//      </Link>
//      </MenuItem>