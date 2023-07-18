import { lazy, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { Container } from 'components/container/Container';
import {  useDispatch, useSelector } from 'react-redux';
import { PrivateRoute, RestrictedRoute } from 'components/Routes';
import { NotFound } from 'pages/NotFound';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';
import { getTheme } from 'redux/selectors';


// import Home from 'pages/Home';
// import Register from 'pages/Register';
// import Login from 'pages/Login';
// import  Phonebook  from 'pages/Phonebook';


const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook'));

const App = () => {
  const { isRefreshing } = useAuth();
  const theme = useSelector(getTheme)

   // Set the data-theme attribute on the <html> element
   document.documentElement.setAttribute('data-theme', theme);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
   <Loader/>
  ) : (                     
   
    <Container >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={< Home />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/phonebook" component={ <Register/>} />
        } />
        <Route path="/login" element={
             <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
        } />
        <Route path="/phonebook" element={
        <PrivateRoute redirectTo="/login" component={<Phonebook />} />
        } />
        <Route path="*" element={<NotFound/>} />
     </Route>
      
    </Routes>
    </Container>


  );
};

export default App;

