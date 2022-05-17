import React from 'react'
import Link from 'next/Link'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href='/'><a>Logo</a></Link>
      </div>
      <div className="menu">
        <div>Causes</div>
        <div>Conséquences</div>
        <div>Login as admin</div>
      </div>
    </nav>
  )
}
export default Navbar