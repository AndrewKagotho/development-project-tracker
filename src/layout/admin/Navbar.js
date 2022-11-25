import { Link, Outlet } from 'react-router-dom'
import { baseURL } from '../../App'

const Navbar = () => {
  return (
    <div>
      <nav className='secondary_nav flex'>
        <h1><Link to={baseURL +'/admin'} className='brand'>County Development Project Tracker Administration</Link></h1>
        <ul>
          <li><Link to={baseURL}>Log out</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar