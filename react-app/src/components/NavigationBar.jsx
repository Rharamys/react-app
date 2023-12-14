import React from 'react'
import { Link } from 'react-router-dom'

import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default NavigationBar