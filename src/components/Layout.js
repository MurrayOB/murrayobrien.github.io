import React from "react"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
