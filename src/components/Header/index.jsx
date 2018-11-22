import React from 'react'
import { NavLink } from 'react-router-dom'

import SettingsIcon from '@material-ui/icons/Settings'
import SchoolIcon from '@material-ui/icons/School'
import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__container-left">
          <NavLink activeClassName="active-link" className="header__link" to="/">
            <img className="logo-image" src="/Nanos-logo.png" alt="logo"></img>
          </NavLink>
        </div>
        <div className="header__container-right">
          <NavLink activeClassName="active-link" className="header__link" to="/campaign-overview">
            <SchoolIcon className="icon" />
            NanosU
          </NavLink>
          <NavLink activeClassName="active-link" className="header__link" to="/settings">
            <SettingsIcon className="icon" />
            Settings
          </NavLink>
          <NavLink activeClassName="active-link" className="header__link" to="/account">Julia Smith</NavLink>
          <img className="avatar" src="/mock-user-avatar.jpg" alt="avatar"></img>
        </div>
      </div>
    </div>
  )
}

export default Header;