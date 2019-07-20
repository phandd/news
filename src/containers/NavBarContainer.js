import React from 'react'
import SearchBar from '../components/SearchBar'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { search } from '../actions'

const NavBarContainer = props => {
  let timeout

  const debouncedSearch = keyword => {
    if (!timeout) {
      timeout = setTimeout(() => {
        props.search(keyword)
      }, 300);
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        props.search(keyword)
      }, 300);
    }
  }

  return (
    <div className="col-md-6 offset-md-3">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
        <SearchBar doSearch={debouncedSearch} />
      </nav>
    </div>
  )
}

export default connect(
  null,
  { search },
)(NavBarContainer)
