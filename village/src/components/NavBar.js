import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to="/smurf-form" className='link' activeClassName="activeLink">Add Smurf</NavLink>
      <NavLink exact to="/" className='link' activeClassName="activeLink">Village</NavLink>
    </div>
  )
}

export default NavBar
