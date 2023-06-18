// import Button from 'components/Button/Button';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { iconActor } from 'utils/svgIcons';
import Loader from 'components/Loader/Loader';
import { DropdownMenu, MainMenu, MenuBtn, MenuItem, SliderBtn, UserName, UserWrapp } from './UserMenu.styled';
import { AiOutlineCaretDown , AiFillCaretRight} from 'react-icons/ai';
import { useState } from 'react';
import { arrayOfActors } from 'utils/avatarSvg';


export function UserMenu() {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState(arrayOfActors[0]);
  const [activeIndex, setActiveIndex] = useState(0)

  console.log(activeIndex)


//===============================
  // function numberGenerator() {
  //   let count = 1;
  
  //   return function getNextNumber() {
  //     if (count > 8) {
  //       count = 1;
  //     }
  
  //     return count++;
  //   };
  // }
  
  // // Usage example:
  // const getNextNumber = numberGenerator();
//=================================

const getIndex = () => {
  const newIndex = (activeIndex + 1) % 7; // Increment the index and wrap around 0-7 range
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
          { activeAvatar }
        
          <UserWrapp>
            <UserName>{user.name}</UserName>
            <MenuBtn
             type='button'
             onClick={() => setIsOpen(!isOpen)}
             > 
             <AiOutlineCaretDown/></MenuBtn>
          </UserWrapp>
          {isOpen && (
        <DropdownMenu className="dropdown-menu">
            <div className='avatar__wrapp'>{arrayOfActors[activeIndex]  }</div>
            {avatar && <SliderBtn 
             type='button'
             onClick={getIndex }
            ><AiFillCaretRight/></SliderBtn>}
            {user.email}
            <MenuItem type='button' onClick={avatarSetter }>{avatar ? 'Set' : 'Avatar'}</MenuItem>
            <MenuItem type='button'>Settings</MenuItem>
            <MenuItem type='button' onClick={() => dispatch(logOut())}>Logout</MenuItem>
        
        </DropdownMenu>
      )}
          {/* <Button onClick={() => dispatch(logOut())}>LogOut</Button> */}
        </StyledWrap>
      )}
    </MainMenu>
  );
}