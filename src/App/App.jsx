import { lazy, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { Container } from 'components/container/Container';
import {  useDispatch, useSelector } from 'react-redux';
import { PrivateRoute, RestrictedRoute } from 'Routes';
import { NotFound } from 'pages/NotFound';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';
import { getLang, getTheme } from 'redux/selectors';
import SlidesPage from 'pages/SlidesPage';
import HookForm from 'components/HookForm/HookForm';


const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook'));
const Profile = lazy(() => import('../pages/Profile'));

const App = () => {
  const {  isLoading } = useAuth();
  const theme = useSelector(getTheme)
  const language = useSelector(getLang)

   // Set the data-theme attribute on the <html> element
   document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || theme);
   document.documentElement.setAttribute('data-lang',  localStorage.getItem('language')  || language);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoading ? (
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
          <Route path="/profile" element={
          <PrivateRoute redirectTo="/login" component={<Profile />} />
          } />
          <Route path="/slides" element={
          <PrivateRoute redirectTo="/login" component={<SlidesPage />} />
          } />
          <Route path="/hookform" element={<HookForm/>} />
          <Route path="*" element={<NotFound/>} />
       </Route>
      
      </Routes>
      </Container>
  


  );
};

export default App;

