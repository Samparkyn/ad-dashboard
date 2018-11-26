import React from 'react'
import classnames from 'classnames'
import Grid from '@material-ui/core/Grid/Grid'

import './styles.scss'

export const CampaignOverviewNav = ({ campaign }) => {
  const isPublished = campaign.status === "Published"
  const isReviewing = campaign.status === "Reviewing"
  const isPaused = campaign.status === "Paused"

  const campaignStatus = (
    <div className="campaign__status__container">
      <div className={classnames('campaign__status__button', {
        "campaign__status__button-published": isPublished,
        "campaign__status__button-reviewing": isReviewing,
        "campaign__status__button-paused": isPaused
      })}>
        <span>{campaign.status}</span>
      </div>
    </div>
  );
  return (
    <Grid container className="overview-nav">
      <Grid item xs={1} className="overview-nav__link">
        Overview
        </Grid>
      <Grid item xs={1} className="overview-nav__link">
        Targeting
        </Grid>
      <Grid item xs={1} className="overview-nav__link">
        Budget
      </Grid>
      <Grid item xs={2} className="overview-nav__link">
        Customize Ads
      </Grid>
      <Grid>
        {campaignStatus}
      </Grid>
    </Grid>
  )
}