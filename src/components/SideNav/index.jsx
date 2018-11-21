import React from 'react'
import { NavLink } from 'react-router-dom'

import PublicIcon from '@material-ui/icons/Public'
import './sidenav.css'

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-container">
        <NavLink activeClassName="active-link" className="sidenav__link" to="/campgains">
          <PublicIcon className="icon" />
          Campaigns
        </NavLink>
        <NavLink activeClassName="active-link" className="sidenav__link" to="/businesses">
          <PublicIcon className="icon" />
          Businesses
        </NavLink>
        <NavLink activeClassName="active-link" className="sidenav__link" to="/payments">
          <PublicIcon className="icon" />
          Payments
        </NavLink>
      </div>
    </div>
  )
}

export default SideNav;