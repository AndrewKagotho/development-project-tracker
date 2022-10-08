import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarMain from './layout/NavbarMain'
import Navbar from './layout/Navbar'
import AdminNavbar from './layout/admin/Navbar'
import LandingView from './views/LandingView'
import CountiesView from './views/CountiesView'
import UpdatesView from './views/UpdatesView'
import AboutView from './views/AboutView'
import Dashboard from './views/Dashboard'
import './styles/main.css'

export const AppContext = React.createContext()

function App() {

  const [loginPanel, setLoginPanelStatus] = React.useState(false)
  const value = {loginPanel, setLoginPanelStatus}

  return (
    <AppContext.Provider value={value} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarMain />}>
            <Route index element={<LandingView />} />
          </Route>
          <Route path='/' element={<Navbar />}>
            <Route path='/counties' element={<CountiesView />} />
            <Route path='/updates' element={<UpdatesView />} />
            <Route path='/about' element={<AboutView />} />
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
