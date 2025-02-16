import { useSelector } from 'react-redux';
import { 
  selectError,
  selectIsLoading, 
  selectIsLoggedIn, 
  selectIsRefreshing, 
  selectSuccessMessage, 
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
    successMessage: useSelector(selectSuccessMessage),
    authError: useSelector(selectError),
  };
};