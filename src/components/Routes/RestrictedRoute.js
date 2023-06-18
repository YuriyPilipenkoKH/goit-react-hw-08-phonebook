
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  if (isLoggedIn) {
    // Redirect to the specified URL
    window.location.href = redirectTo;
    // Return null to prevent rendering of the component
    return null;
  }

  // Render the component if the user is not authenticated
  return Component;
};
