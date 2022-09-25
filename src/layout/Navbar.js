import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex'>
        <h1>County Development Project Tracker</h1>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/map'>Map</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar