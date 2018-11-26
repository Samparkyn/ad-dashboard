import React from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid/Grid'
import PublicIcon from '@material-ui/icons/Public'
import './styles.scss'

const SideNav = () => {
  return (
    <Grid item xs={12} className="sidenav">
      <NavLink activeClassName="active-link" className="sidenav__link" to="/campaigns">
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
    </Grid>
  )
}

export default SideNav;