import React from 'react';
import { CampaignStatus } from '../campaign-status';
import { CampaignStats } from '../campaign-stats';
import { SocialMediaIcons } from '../social-media-icons';

import './styles.scss'

export const CampaignRow = ({ campaign }) => {
  const clicksValue = campaign.stats.no_of_clicks;
  const impressionsValue = campaign.stats.impressions;
  const clicksPercentage = campaign.stats.clicks_percent_change;
  const impressionsPercentage = campaign.stats.impressions_percent_change;

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

  return (
    <div className="campaign__container">
      {campaignImage}
      {campaignInfo}
      {campaignStats}
      {impressionStats}
      <div className="campaign__status__wrapper">
        <CampaignStatus campaign={campaign} />
      </div>
      <SocialMediaIcons />
    </div>
  )
}