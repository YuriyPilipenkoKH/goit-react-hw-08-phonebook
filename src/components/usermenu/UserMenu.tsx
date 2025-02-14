import React, { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
import { DropdownMenu, MainMenu, MenuBtn, MenuItem, SliderBtn, StyledWrap, UserName, UserWrapp } from './UserMenu.styled';
import { FaWindowClose } from 'react-icons/fa';
import { AiFillCaretRight, AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();
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
   dispatch(logOut())
}



  return (
    <MainMenu className='mainMenu'>
      {isFetching && <Loader/>}
      {isLoggedIn && (
        <StyledWrap>
          <div className='avatar__wrapp-sm'>{ activeAvatar }</div>
        
          <UserWrapp >
            <UserName >{user.name}</UserName>
            <MenuBtn
             type='button'
             onClick={() => setIsOpen(!isOpen)}
            
             > 
              { isOpen ?  <FaWindowClose/> : <AiOutlineCaretDown/> }</MenuBtn>
          </UserWrapp>
          {isOpen && (
        <DropdownMenu className="dropdown-menu">
            <div className='avatar__wrapp'>{arrayOfActors[activeIndex]  }</div>
            {avatar && <SliderBtn 
             type='button'
             onClick={getIndex }
            ><AiFillCaretRight/></SliderBtn>}
            {user.email}

            <MenuItem type='button' onClick={avatarSetter }>
              {avatar ? lang.set : lang.avatar}</MenuItem>
              <MenuItem 
               className="profile-button"
               type='button'> 
            <Link
            className="profile-link"
            onClick={() => setIsOpen(!isOpen)}
             to="/profile">
              {lang.profile}
               </Link>
               </MenuItem>
            <MenuItem 
               className="slides-button"
               onClick={() => setIsOpen(!isOpen)}
               type='button'>
            <Link to="/slides" className="button-link">
              {lang.slides}
            </Link>
          </MenuItem>
            <MenuItem type='button' onClick={quit}>
              {lang.out}</MenuItem>
        
        </DropdownMenu>
      )}

        </StyledWrap>
      )}
    </MainMenu>
  );
}
export default UserMenu