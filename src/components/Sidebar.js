import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/projects">Projects</Link>
    </div>
  )
}
