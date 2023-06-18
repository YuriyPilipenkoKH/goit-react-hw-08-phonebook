import {   useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { Container } from 'components/container/Container';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { Phonebook } from 'pages/Phonebook';

import { useDispatch } from 'react-redux';
import { PrivateRoute, RestrictedRoute } from 'components/Routes';
import { NotFound } from 'pages/NotFound';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';


// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Phonebook = lazy(() => import('../pages/Phonebook'));

const App = () => {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
   <Loader/>
  ) : (
   
    <Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={< Home />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="https://www.google.com" component={ <Register/>} />
        } />
        <Route path="/login" element={
             <RestrictedRoute redirectTo="https://github.com/" component={<Login />} />
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

  //   <Routes>
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<HomePage />} />
  //     <Route
  //       path="/register"
  //       element={
  //         <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
  //       }
  //     />
  //     <Route
  //       path="/login"
  //       element={
  //         <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
  //       }
  //     />
  //     <Route
  //       path="/tasks"
  //       element={
  //         <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
  //       }
  //     />
  //   </Route>
  // </Routes>