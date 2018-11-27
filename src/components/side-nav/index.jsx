import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';
import PublicIcon from '@material-ui/icons/Public'

import { CampaignStatus } from '../campaign-status'
import './styles.scss'

const pausedCampaign = {
  "status": "Paused"
}

const publishedCampaign = {
  "status": "Published"
}

const SideNav = ({ location }) => {
  const inOverviewPage = location.pathname.includes('campaign/')

  return (
    <div className="sidenav">
      <NavLink activeClassName="active-link" className="sidenav__link" to="/campaigns">
        <PublicIcon className="icon" />
        Campaigns
      </NavLink>
      <NavLink activeClassName="active-link" className="sidenav__link" to="/#">
        <PublicIcon className="icon" />
        Businesses
      </NavLink>
      <NavLink activeClassName="active-link" className="sidenav__link" to="/#">
        <PublicIcon className="icon" />
        Payments
      </NavLink>
      {inOverviewPage && (
        <div className="sidenav__helpbox">
          <p className="sidenav__helpbox__icon">?</p>
          <p>If you see this it means your campaign is Paused</p>
          <CampaignStatus campaign={pausedCampaign} />
          <p>If you see this is means your campaign is live</p>
          <CampaignStatus campaign={publishedCampaign} />
          <p className="sidenav__helpbox__no-help">I don't need help.</p>
        </div>
      )}
    </div>
  )
}

export default withRouter(SideNav);