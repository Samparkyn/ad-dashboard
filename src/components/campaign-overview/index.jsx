import React from 'react';
import { CampaignOverviewNav } from './campaign-overview-nav';
import { CampaignStats } from '../CampaignStats/campaign-stats';

const campaignData = require('../../mock-campaign-data.json')

export const CampaignOverview = ({ match }) => {
  const campaignId = parseInt(match.params.id)
  const campaign = campaignData.find(c => c.id === campaignId);

  const clicksValue = campaign.stats.no_of_clicks;
  const impressionsValue = campaign.stats.impressions;
  const cpcValue = campaign.stats.avg_cpc;
  const clicksPercentage = campaign.stats.clicks_percent_change;
  const impressionsPercentage = campaign.stats.impressions_percent_change;
  const cpcPercentage = campaign.stats.cpc_percent_change;
  const budgetLeft = campaign.budget_remaining;
  const daysLeft = campaign.days_remaining;

  const campaignDetails = (
    <div className="campaign-overview__details__container">
      <div className="campaign-overview__details__name">name</div>
      <div className="campaign-overview__details__container">started on...</div>
    </div>
  )

  const campaignStats = (
    <div className="campaign-overview__stats__container">
      <div className="campaign-overview__stats__image">
        <img src={campaign.image} alt="campaign" />
      </div>
      <div className="campaign-overview__stats__section">
        <div className="campaign-overview__stats__section__header">
          Your customers
        </div>
        <div className="campaign-overview__stats__section__content">
          <CampaignStats value={clicksValue} percentageChange={clicksPercentage} label="clicks" />
          <CampaignStats value={impressionsValue} percentageChange={impressionsPercentage} label="impressions" />
          <CampaignStats value={cpcValue} percentageChange={cpcPercentage} label="avg CPC" />
          <div className="campaign-overview__stats__section__content__last">
            <CampaignStats value={budgetLeft} label="budget left $" />
            <CampaignStats value={daysLeft} label="days left" />
          </div>
        </div>
      </div>
    </div>
  )

  const campaignBreakdown = (
    <div className="campaign-overview__breakdown__container">
      <div className="campaign-overview__breakdown__header">
        Breakdown
      </div>
      <div className="campaign-overview__breakdown__list">
        {/* <CampaignBreakdown campaign={campaign} /> */}
      </div>
    </div>
  )

  return (
    <div className="campaign-overview__container">
      <CampaignOverviewNav />
      {campaignDetails}
      {campaignStats}
      {campaignBreakdown}
    </div>
  )

}