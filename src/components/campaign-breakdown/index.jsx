import React from 'react';
import { object } from 'prop-types';
import { CampaignStats } from '../campaign-stats';
import { parseMoney } from '../../utils/parse-money';
import './styles.scss'

const rowsStructure = [
  {
    name: 'Facebook Ads',
    key: 'facebook',
    image: '/logo-facebook.png'
  },
  {
    name: 'Instagram Ads',
    key: 'instagram',
    image: '/logo-instagram.png'
  },
  {
    name: 'Google Ads',
    key: 'google',
    image: '/logo-google-ads.png'
  }
];

export const CampaignBreakdown = ({ campaign }) => {
  const dataRows = rowsStructure.map(s => {
    const data = campaign.social_media[s.key];
    return (
      <div key={s.name} className="campaign-breakdown__row">
        <div className="campaign-breakdown__name">
          <img className="campaign-breakdown__image" src={s.image} alt={s.name} />
          {s.name}
        </div>
        <div className="campaign-breakdown__clicks">
          <CampaignStats value={data.clicks} percentageChange={data.clicks_percent_change} label="clicks" />
        </div>
        <div className="campaign-breakdown__impressions">
          <CampaignStats value={data.impressions} percentageChange={data.impressions_percent_change} label="impressions" />
        </div>
        <div className="campaign-breakdown__cpc">
          <CampaignStats value={data.cpc} percentageChange={data.cpc_percentage_change} label="cost/click $" />
        </div>
        <div className="campaign-breakdown__budget">
          <CampaignStats value={parseMoney(data.budget_remaining)} label="budget left $" />
        </div>
      </div>
    );
  });

  return (
    <div className="campaign-breakdown">
      {dataRows}
    </div>
  )
};

CampaignBreakdown.propTypes = {
  campaign: object.isRequired,
}