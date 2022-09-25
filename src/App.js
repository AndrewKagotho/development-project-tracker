import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Landing from './views/Landing'
import Map from './views/Map'
import './styles/main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path='/map' element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
