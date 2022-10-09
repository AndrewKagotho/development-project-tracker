import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='secondary_nav flex'>
        <h1><Link to='/admin' className='brand'>County Development Project Tracker Administration</Link></h1>
        <ul>
          <li><Link to='/'>Log out</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar