import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='sec_nav flex'>
        <h1><Link to='/' className='brand'>County Development Project Tracker</Link></h1>
        <ul>
          <li><Link to='/counties'>Counties</Link></li>
          <li><Link to='/stats'>Statistics</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar