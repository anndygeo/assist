import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className=''>

        <ul className=''>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}