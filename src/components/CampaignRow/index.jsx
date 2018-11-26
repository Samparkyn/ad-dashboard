import React from 'react';
import classnames from 'classnames';
import './campaign-row.scss'
import { CampaignStats } from '../CampaignStats/campaign-stats'

export const CampaignRow = ({ campaign }) => {
  const clicksValue = campaign.stats.no_of_clicks;
  const impressionsValue = campaign.stats.impressions;
  const clicksPercentage = campaign.stats.clicks_percent_change;
  const impressionsPercentage = campaign.stats.impressions_percent_change;
  const isPublished = campaign.status === "Published"
  const isReviewing = campaign.status === "Reviewing"
  const isPaused = campaign.status === "Paused"

  const campaignImage = (
    <div className="campaign__image__wrapper">
      <img className="campaign__image" src={campaign.image} alt="campaign"></img>
    </div>
  );

  const campaignInfo = (
    <div className="campaign__info">
      <div className="campaign__info-name">{campaign.name}</div>
      <div className="campaign__info-details">{campaign.company_name} | Started on {campaign.start_date}</div>
    </div>
  );

  const campaignStats = (
    <div className="campaign__stats-container">
      <CampaignStats value={clicksValue} percentageChange={clicksPercentage} label="clicks" />
    </div>
  );

  const impressionStats = (
    <div className="campaign__stats-container">
      <CampaignStats value={impressionsValue} percentageChange={impressionsPercentage} label="impressions" />
    </div>
  )

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

  const campaignSocial = (
    <div className="campaign__social">
      <div>
        <img src="/logo-facebook.png" alt="facebook"></img>
      </div>
      <div>
        <img src="/logo-google.png" alt="google"></img>
      </div>
      <div>
        <img src="/logo-instagram.png" alt="instagram"></img>
      </div>
    </div>
  )

  return (
    <div className="campaign__container">
      {campaignImage}
      {campaignInfo}
      {campaignStats}
      {impressionStats}
      {campaignStatus}
      {campaignSocial}
    </div>
  )
}