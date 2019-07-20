import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/news'} activeClassName="active" className="nav-link">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to={'/history'} activeClassName="active" className="nav-link">
                History
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar