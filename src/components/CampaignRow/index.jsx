import React from 'react';

import './campaign-row.scss'

export const CampaignRow = ({ campaign }) => {
  return (
    <div className="campaign__container">
      <img className="campaign__image" src={campaign.image} alt="campaign"></img>
      <div className="campaign__info">
        <p className="campaign__info-name">{campaign.name}</p>
        <p className="campaign__info-details">{campaign.company_name} | Started on {campaign.start_date}</p>
      </div>
      <div className="campaign__clicks">
        <p>{campaign.stats.no_of_clicks}</p>
        <p>clicks</p>
      </div>
      <div>
        <p className="percentage">{campaign.stats.clicks_percent_change}%</p>
      </div>
      <div className="campaign__impressions">
        <p>{campaign.stats.impressions}</p>
        <p>impressions</p>
      </div>
      <div>
        <p className="percentage">{campaign.stats.impressions_percent_change}%</p>
      </div>
      <div className="campaign__status">
        <span>{campaign.status}</span>
      </div>
      <div className="campaign__social">
        <p>FB</p>
        <p>G</p>
        <p>Insta</p>
      </div>
    </div>
  )
}