import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from './components/container/Container'
import Layout from './components/layout/Layout'
import { useSelector } from 'react-redux'
import { getLang, getTheme } from './redux/selectors/selectors'
import { useAppDispatch } from './hooks/useAppDispatch'
import { lazy, useEffect } from 'react'
import { refreshUser } from './redux/auth/operations'
import { useAuth } from './hooks/useAuth'

const HomePage = lazy(() => import('./pages/HomePage'))
const SignUpPage = lazy(() => import('./pages/SignUpPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const PhonebookPage = lazy(() => import('./pages/PhonebookPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage '))

function App() {
  const {token} = useAuth()

  const theme = useSelector(getTheme)
  const language = useSelector(getLang)
    // Set the data-theme attribute on the <html> element
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || theme);
  document.documentElement.setAttribute('data-lang',  localStorage.getItem('language')  || language);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <Container>
       <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={< HomePage />}/>
        <Route path="/signup"
            element ={!token
            ? <SignUpPage/>
            : <Navigate to='/dashboard'/>}/>
        <Route path="/login"
            element ={!token
            ? <LoginPage/>
            : <Navigate to='/dashboard'/>}/>
        <Route path="dashboard"
            element ={ token
            ? <PhonebookPage/>
            : <Navigate to='/login'/>}/>
        <Route path="/profile"
            element={ token
            ? <ProfilePage /> 
            : <Navigate to='/login' />} />
        <Route path="*" 
            element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
