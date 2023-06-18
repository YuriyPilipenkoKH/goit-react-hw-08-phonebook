// import Button from 'components/Button/Button';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { iconActor } from 'utils/svgIcons';
import Loader from 'components/Loader/Loader';
import { DropdownMenu, MainMenu, MenuBtn, MenuItem, UserName, UserWrapp } from './UserMenu.styled';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useState } from 'react';


export function UserMenu() {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <MainMenu className='mainMenu'>
      {isFetching && <Loader/>}
      {isLoggedIn && (
        <StyledWrap>
          { iconActor }
         
          <UserWrapp>
            <UserName>{user.name}</UserName>
            <MenuBtn
             type='button'
             onClick={() => setIsOpen(!isOpen,)}
             > 
             <AiOutlineCaretDown/></MenuBtn>
          </UserWrapp>
          {isOpen && (
        <DropdownMenu className="dropdown-menu">
            <div>{ iconActor }</div>
            {user.email}
            <MenuItem type='button'>Avatar</MenuItem>
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