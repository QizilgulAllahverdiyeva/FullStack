import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
const Header = () => {
  return (
    <header>
        <h1>FOUNDATION</h1>
        <ul >
            <li><NavLink style={{textDecoration:"none"}} to={"/"} className={(nav)=> nav.isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}}  to={"/form"} className={(nav)=> nav.isActive ? "active" : ""}>Add</NavLink></li>
            <li>Discover</li>
            <li>Donate</li>
            <li>Contact</li>
        </ul>
    </header>
  )
}

export default Header