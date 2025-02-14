import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import { Container } from './components/Container'
import Layout from './components/layout/Layout'

function App() {


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
