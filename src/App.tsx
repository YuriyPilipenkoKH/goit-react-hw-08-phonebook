import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from './components/container/Container'
import Layout from './components/layout/Layout'
import { useAppDispatch } from './hooks/useAppDispatch'
import { lazy, useEffect } from 'react'
import { refreshUser } from './redux/auth/operations'
import { useAuth } from './hooks/useAuth'
import AdminPage from './pages/AdminPage'
import  "./utils/notiflix"
import ErrorBoundary from './components/errorboundary/ErrorBoundary'
const HomePage = lazy(() => import('./pages/HomePage'))
const SignUpPage = lazy(() => import('./pages/SignUpPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const PhonebookPage = lazy(() => import('./pages/PhonebookPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage '))

function App() {
  const {token, user} = useAuth()
  const isAnmin = user?.role  === 'admin'

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refreshUser()); 
  }, [dispatch]);


  return (
    <ErrorBoundary>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={< HomePage />}/>
          <Route path="/signup"
              element ={!token
              ? <SignUpPage/>
              : <Navigate to='/phonebook'/>}/>
          <Route path="/login"
              element ={!token
              ? <LoginPage/>
              : <Navigate to='/phonebook'/>}/>
          <Route path="phonebook"
              element ={ token
              ? <PhonebookPage/>
              : <Navigate to='/login'/>}/>
          <Route path="/profile"
              element={ token
              ? <ProfilePage /> 
              : <Navigate to='/login' />} />
          <Route path="/admin"
              element={ !token
              ? <PhonebookPage/> 
              : isAnmin 
                ? <AdminPage/>
                :  <Navigate to='/phonebook' />
              } />
          <Route path="*" 
              element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
    </ErrorBoundary>

  )
}

export default App
