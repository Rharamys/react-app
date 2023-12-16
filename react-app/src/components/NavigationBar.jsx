import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <nav>
      <NavLink to="/" 
        // className={({isActive}) => (isActive ? "active" : "inactive")}
        >Home</NavLink>
      <NavLink to="/about">About</NavLink>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
    </nav>
  )
}

export default NavigationBar