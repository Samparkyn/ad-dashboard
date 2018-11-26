import React from 'react'
import { NavLink } from 'react-router-dom'
import { CampaignStatus } from '../campaign-status';
import { SocialMediaIcons } from '../social-media-icons';

import './styles.scss'

export const CampaignOverviewNav = ({ campaign }) => {
  return (
    <div className="overview-nav__container">
      <div className="overview-nav__container__left">
        <NavLink className="overview-nav__link overview-nav__link-active" to="#">
          Overview
      </NavLink>
        <NavLink className="overview-nav__link" to="#">
          Targeting
      </NavLink>
        <NavLink className="overview-nav__link" to="#">
          Budget
      </NavLink>
        <NavLink className="overview-nav__link" to="#">
          Customize Ads
      </NavLink>
      </div>
      <div className="overview-nav__container__right">
        <CampaignStatus campaign={campaign} />
        <SocialMediaIcons />
      </div>
    </div>
  )
}