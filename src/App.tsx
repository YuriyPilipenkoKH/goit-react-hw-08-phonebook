import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import { Container } from './components/Container'

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
