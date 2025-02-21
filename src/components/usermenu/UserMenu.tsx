import  { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../hooks/useAuth';
import { AuthResponse, logOut } from '../../redux/auth/operations';
import { DropdownMenu, MainMenu, MenuBtn, MenuItem, SliderBtn, StyledWrap, UserName, UserWrapp } from './UserMenu.styled';
import { FaWindowClose } from 'react-icons/fa';
import { AiFillCaretRight, AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { arrayOfActors } from '../../img/actors.ts';
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
  const [avatar, setAvatar] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState(arrayOfActors[0]);
  const [activeIndex, setActiveIndex] = useState(0)
  const lang = useLanguage()


const getIndex = () => {
  const newIndex = (activeIndex + 1) % 20; // Increment the index and wrap around 0-7 range
  setActiveIndex(newIndex);
}

const avatarSetter = () => {
  setAvatar(!avatar)
  if(avatar) {
    setActiveAvatar(arrayOfActors[activeIndex])
  }
}
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
          <div className='avatar__wrapp-sm'>{ activeAvatar }</div>
        
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

            {/* <div className='avatar__wrapp'> {arrayOfActors[activeIndex]()}  </div>
            {avatar && <SliderBtn 
             type='button'
             onClick={getIndex }
            ><AiFillCaretRight/></SliderBtn>} */}
          <AvatarUploadForm/>
            {user?.email}

            <MenuItem type='button' onClick={avatarSetter }>
              {avatar ? lang.set : lang.avatar}
            </MenuItem>
   
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