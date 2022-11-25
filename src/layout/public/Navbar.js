import { Link, Outlet } from 'react-router-dom'
import { baseURL } from '../../App'

const Navbar = () => {
  return (
    <div>
      <nav className='secondary_nav flex'>
        <h1><Link to={baseURL} className='brand'>County Development Project Tracker</Link></h1>
        <ul>
          <li><Link to={baseURL +'/counties'}>Counties</Link></li>
          <li><Link to={baseURL +'/updates'}>Updates</Link></li>
          <li><Link to={baseURL +'/about'}>About</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar