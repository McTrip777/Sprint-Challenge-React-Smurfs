import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/smurf-form" activeClassName="formLink">Add Smurf</NavLink>
      <NavLink to="/" activeClassName="formLink">Smurfs</NavLink>
    </div>
  )
}

export default NavBar
