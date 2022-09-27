import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarMain from './layout/NavbarMain'
import Navbar from './layout/Navbar'
import LandingView from './views/LandingView'
import CountiesView from './views/CountiesView'
import StatsView from './views/StatsView'
import './styles/main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarMain />}>
          <Route index element={<LandingView />} />
        </Route>
        <Route path='/' element={<Navbar />}>
          <Route path='/counties' element={<CountiesView />} />
          <Route path='/stats' element={<StatsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
