import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicNavbarLanding from './layout/public/NavbarLanding'
import PublicNavbar from './layout/public/Navbar'
import AdminNavbar from './layout/admin/Navbar'
import Landing from './views/public/Landing'
import Counties from './views/public/Counties'
import Updates from './views/public/Updates'
import About from './views/public/About'
import Dashboard from './views/admin/Dashboard'
import './styles/main.css'

export const AppContext = React.createContext()

function App() {

  const [loginPanel, setLoginPanelStatus] = React.useState(false)
  const value = {loginPanel, setLoginPanelStatus}

  return (
    <AppContext.Provider value={value} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicNavbarLanding />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path='/' element={<PublicNavbar />}>
            <Route path='/counties' element={<Counties />} />
            <Route path='/updates' element={<Updates />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/admin' element={<AdminNavbar />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
