import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to='/' className='logo'>React</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* <li><Link to='/'>Home</Link></li> */}
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contacts'>Contact</Link></li>
      </ul>
    </div>
  </nav>
        
  )
}
