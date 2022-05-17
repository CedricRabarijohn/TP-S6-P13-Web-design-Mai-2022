import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import React from 'react'

type Props = {}

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  )
}
export default Layout