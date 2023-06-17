import Button from 'components/Button/Button';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { iconActor } from 'utils/svgIcons';
import Loader from 'components/Loader/Loader';


export function UserMenu() {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();


  return (
    <>
      {isFetching && <Loader/>}
      {isLoggedIn && (
        <StyledWrap>
          { iconActor }
          <p>{user.name}</p>
          <Button onClick={() => dispatch(logOut())}>LogOut</Button>
        </StyledWrap>
      )}
    </>
  );
}