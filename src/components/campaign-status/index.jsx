import React from 'react'
import classnames from 'classnames'

import './styles.scss'

export const CampaignStatus = ({ campaign }) => {
  const isPublished = campaign.status === "Published"
  const isReviewing = campaign.status === "Reviewing"
  const isPaused = campaign.status === "Paused"

  return (
    <div className="campaign__status">
      <div className={classnames('campaign__status__button', {
        "campaign__status__button-published": isPublished,
        "campaign__status__button-reviewing": isReviewing,
        "campaign__status__button-paused": isPaused
      })}>
        <span>{campaign.status}</span>
      </div>
    </div>
  )
}