import { useSelector } from 'react-redux';
import { 
  selectIsFetching, 
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
    // isLoading: useSelector(selectIsLoading),
    isFetching: useSelector(selectIsFetching),
    token: useSelector(selectToken),
  };
};