import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppContext } from '../../App'

const NavbarLanding = () => {
  
  const {panelStatus} = React.useContext(AppContext)

  return (
    <div>
      <nav className='flex'>
        <h1><Link to='/' className='brand'>County Development Project Tracker</Link></h1>
        <ul>
          <li><Link to='/counties'>Counties</Link></li>
          <li><Link to='/updates'>Updates</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><button onClick={() => panelStatus.setLoginPanelStatus(true)}>Login</button></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavbarLanding