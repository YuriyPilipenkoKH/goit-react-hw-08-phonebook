import { Route, Routes } from 'react-router-dom'

import { Container } from './components/container/Container'
import Layout from './components/layout/Layout'
import { useSelector } from 'react-redux'
import { getLang, getTheme } from './redux/selectors/selectors'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { refreshUser } from './redux/auth/operations'

function App() {

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

        
        </Route>
      </Routes>
    </Container>
  )
}

export default App
