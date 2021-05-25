import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
