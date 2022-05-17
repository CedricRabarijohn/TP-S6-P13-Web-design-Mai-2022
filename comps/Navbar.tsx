import React from 'react'
import Link from 'next/link'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href='/'><a>Logo</a></Link>
      </div>
      <div className="menu">
        <div>Login as admin</div>
      </div>
    </nav>
  )
}
export default Navbar