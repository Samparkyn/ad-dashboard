import React from 'react'
import { NavLink } from 'react-router-dom'
import { CampaignStatus } from '../campaign-status';

import './styles.scss'

export const CampaignOverviewNav = ({ campaign }) => {
  return (
    <div className="overview-nav__container">
      <NavLink item xs={1} className="overview-nav__link" to="#">
        Overview
      </NavLink>
      <NavLink item xs={1} className="overview-nav__link" to="#">
        Targeting
      </NavLink>
      <NavLink item xs={1} className="overview-nav__link" to="#">
        Budget
      </NavLink>
      <NavLink item xs={2} className="overview-nav__link" to="#">
        Customize Ads
      </NavLink>
      <CampaignStatus campaign={campaign} />
    </div>
  )
}