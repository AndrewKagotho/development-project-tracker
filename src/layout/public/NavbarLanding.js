import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppContext } from '../../App'
import { baseURL } from '../../App'

const NavbarLanding = () => {
  
  const {panelStatus} = React.useContext(AppContext)

  return (
    <div>
      <nav className='flex'>
        <h1><Link to={baseURL} className='brand'>County Development Project Tracker</Link></h1>
        <ul>
          <li><Link to={baseURL +'/counties'}>Counties</Link></li>
          <li><Link to={baseURL +'/updates'}>Updates</Link></li>
          <li><Link to={baseURL +'/about'}>About</Link></li>
          <li><button onClick={() => panelStatus.setLoginPanelStatus(true)}>Login</button></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavbarLanding