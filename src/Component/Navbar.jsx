import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/Assets'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#" >Yummy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link " to="/cart"><img src={assets.basket_icon} alt="" /></NavLink>
        <NavLink className="nav-link" to="About">About</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar