import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
        <div className="navlogo">
            <h3 ><b> LeetCodeVisuals</b></h3>
        </div>
        <div className="navlinks">
            <Link to="/" className="navlink">Home</Link>
            <Link to="#" className="navlink">Solutions</Link>
            <Link to="#" className="navlink">About</Link>
            <Link to="#" className="navlink">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar