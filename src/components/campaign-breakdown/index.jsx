import React from 'react';
import { string, number } from 'prop-types';

import { CampaignStats } from '../CampaignStats/campaign-stats';
import './styles.scss'

export const CampaignBreakdown = ({ campaign }) => {
  const clicksValueFb = campaign.social_media.facebook.clicks;
  const impressionsValueFb = campaign.social_media.facebook.impressions;
  const cpcValueFb = campaign.social_media.facebook.cpc;
  const clicksPercentageFb = campaign.social_media.facebook.clicks_percent_change;
  const impressionsPercentageFb = campaign.social_media.facebook.impressions_percent_change;
  const cpcPercentageFb = campaign.social_media.facebook.cpc_percent_change;
  const budgetRemainingFb = campaign.social_media.facebook.budget_remaining

  const clicksValueInsta = campaign.social_media.instagram.clicks;
  const impressionsValueInsta = campaign.social_media.instagram.impressions;
  const cpcValueInsta = campaign.social_media.instagram.cpc;
  const clicksPercentageInsta = campaign.social_media.instagram.clicks_percent_change;
  const impressionsPercentageInsta = campaign.social_media.instagram.impressions_percent_change;
  const cpcPercentageInsta = campaign.social_media.instagram.cpc_percent_change;
  const budgetRemainingInsta = campaign.social_media.instagram.budget_remaining

  const clicksValueGoogle = campaign.social_media.google.clicks;
  const impressionsValueGoogle = campaign.social_media.google.impressions;
  const cpcValueGoogle = campaign.social_media.google.cpc;
  const clicksPercentageGoogle = campaign.social_media.google.clicks_percent_change;
  const impressionsPercentageGoogle = campaign.social_media.google.impressions_percent_change;
  const cpcPercentageGoogle = campaign.social_media.google.cpc_percent_change;
  const budgetRemainingGoogle = campaign.social_media.google.budget_remaining

  return (
    <div className="campaign-breakdown__container">
      <div className="campaign-breakdown__details">
        <div className="campaign-breakdown__name">
          <img className="campaign-breakdown__image" src="/logo-facebook.png" alt="facebook"></img>
          Facebook Ads
        </div>
        <CampaignStats value={clicksValueFb} percentageChange={clicksPercentageFb} label="clicks" />
        <CampaignStats value={impressionsValueFb} percentageChange={impressionsPercentageFb} label="impressions" />
        <CampaignStats value={cpcValueFb} percentageChange={cpcPercentageFb} label="cost/click $" />
        <CampaignStats value={budgetRemainingFb} label="budget left $" />
      </div>
      <div className="campaign-breakdown__details">
        <div className="campaign-breakdown__name">
          <img className="campaign-breakdown__image" src="/logo-instagram.png" alt="instagram"></img>
          Instagram Ads
        </div>
        <CampaignStats value={clicksValueInsta} percentageChange={clicksPercentageInsta} label="clicks" />
        <CampaignStats value={impressionsValueInsta} percentageChange={impressionsPercentageInsta} label="impressions" />
        <CampaignStats value={cpcValueInsta} percentageChange={cpcPercentageInsta} label="cost/click $" />
        <CampaignStats value={budgetRemainingInsta} label="budget left $" />
      </div>
      <div className="campaign-breakdown__details">
        <div className="campaign-breakdown__name">
          <img className="campaign-breakdown__image" src="/logo-google-ads.png" alt="google"></img>
          Google Ads
        </div>
        <CampaignStats value={clicksValueGoogle} percentageChange={clicksPercentageGoogle} label="clicks" />
        <CampaignStats value={impressionsValueGoogle} percentageChange={impressionsPercentageGoogle} label="impressions" />
        <CampaignStats value={cpcValueGoogle} percentageChange={cpcPercentageGoogle} label="cost/click $" />
        <CampaignStats value={budgetRemainingGoogle} label="budget left $" />
      </div>
    </div>
  )
};

CampaignBreakdown.propTypes = {
  // the actual number count to display (eg. 14000)
  value: number.isRequired,
  // the percentage value (eg. 10 or -20)
  percentageChange: number,
  // text to show under the value (eg. "clicks" or "impressions" )
  label: string.isRequired
}