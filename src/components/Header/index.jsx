import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__container-left">
          <Link className="header__link" to="/">
            <img src="/Nanos-logo.png" alt="logo"></img>
          </Link>
        </div>
        <div className="header__container-right">
          <Link className="header__link" to="/overview">NanosU</Link>
          <Link className="header__link" to="/settings">Settings</Link>
          <Link className="header__link" to="/account">Julia Smith</Link>
          <img className="avatar" src="/mock-user-avatar.jpg" alt="avatar"></img>
        </div>
      </div>
    </div>
  )
}

export default Header;