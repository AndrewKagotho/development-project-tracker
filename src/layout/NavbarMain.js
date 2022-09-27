import { Link, Outlet } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <div>
      <nav className='flex'>
        <h1><Link to='/' className='brand'>County Development Project Tracker</Link></h1>
        <ul>
          <li><Link to='/counties'>Counties</Link></li>
          <li><Link to='/stats'>Statistics</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavbarMain