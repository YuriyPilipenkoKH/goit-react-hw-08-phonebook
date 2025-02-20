import { useSelector } from 'react-redux';
import { 
  selectisAdmin,
  selectIsLoading, 
  selectIsLoggedIn, 
  selectIsRefreshing, 
  selectToken, 
  selectUser
 } from '../redux/auth/selectors';




export const useAuth = () => {

  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    isLoading: useSelector(selectIsLoading),
    token: useSelector(selectToken),
    isAdmin: useSelector(selectisAdmin),
  };
};