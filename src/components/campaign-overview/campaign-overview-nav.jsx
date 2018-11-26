import React from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid/Grid'

//import './campaign-overview-nav.scss'

export const CampaignOverviewNav = () => {
  return (
    <Grid item xs={12} className="sidenav">
      <NavLink className="sidenav__link" to="/campaign-overview">
        Overview
        </NavLink>
      <NavLink className="sidenav__link" to="/businesses">
        Targeting
        </NavLink>
      <NavLink className="sidenav__link" to="/payments">
        Budget
      </NavLink>
      <NavLink className="sidenav__link" to="/payments">
        Budget
      </NavLink>
    </Grid>
  )
}