import { Route, Routes } from 'react-router-dom'

import { Container } from './components/container/Container'
import Layout from './components/layout/Layout'
import { useSelector } from 'react-redux'
import { getLang, getTheme } from './redux/selectors/selectors'

function App() {

  const theme = useSelector(getTheme)
  const language = useSelector(getLang)
    // Set the data-theme attribute on the <html> element
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || theme);
    document.documentElement.setAttribute('data-lang',  localStorage.getItem('language')  || language);
 

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
