import { StyledWrap } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector} from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Loader from 'components/Loader/Loader';
import { DropdownMenu, MainMenu, MenuBtn, MenuItem, SliderBtn, UserName, UserWrapp } from './UserMenu.styled';
import { AiOutlineCaretDown , AiFillCaretRight} from 'react-icons/ai';
import {FaWindowClose} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { arrayOfActors } from 'utils/avatarSvg';
import { langEN, langUA } from 'utils/languages';
import { getLang } from 'redux/selectors';
import { StyledLink } from 'components/Layout/Layout.styled';



export function UserMenu() {

  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState(arrayOfActors[0]);
  const [activeIndex, setActiveIndex] = useState(0)
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])


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
            <StyledLink
            className="profile-link"
             to="/profile">
              {lang.profile}
               </StyledLink>
            <MenuItem type='button' onClick={() => dispatch(logOut())}>
              {lang.out}</MenuItem>
        
        </DropdownMenu>
      )}

        </StyledWrap>
      )}
    </MainMenu>
  );
}