import React from "react"
import { Link } from "gatsby"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-item"></div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/projects">Projects</Link>
        <br />
      </div>
    </div>
  )
}

export default Navbar
