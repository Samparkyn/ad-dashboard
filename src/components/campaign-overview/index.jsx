import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func, bool } from 'prop-types';

import { CampaignOverviewNav } from '../campaign-overview-nav';
import { CampaignStats } from '../campaign-stats';
import { CampaignBreakdown } from '../campaign-breakdown';
import { loadCampaign } from '../../redux/actions';
import './styles.scss'

export class CampaignOverview extends Component {
  componentDidMount() {
    const campaignId = parseInt(this.props.match.params.id)
    this.props.dispatch(loadCampaign(campaignId))
  }

  render() {
    const { campaign = {} } = this.props;

    if (!campaign.stats) {
      return null
    }

    const clicksValue = campaign.stats.no_of_clicks;
    const impressionsValue = campaign.stats.impressions;
    const cpcValue = campaign.stats.avg_cpc;
    const clicksPercentage = campaign.stats.clicks_percent_change;
    const impressionsPercentage = campaign.stats.impressions_percent_change;
    const cpcPercentage = campaign.stats.cpc_percent_change;
    const budgetLeft = campaign.budget_remaining;
    const daysLeft = campaign.days_remaining;
    const date = new Date(campaign.start_date).toLocaleDateString("en-en", {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const campaignDetails = (
      <div className="campaign-overview__details__container">
        <div className="campaign-overview__details__name">{campaign.name}</div>
        <div className="campaign-overview__details__date">Started on <span>{date}</span></div>
      </div>
    )

    const campaignStats = (
      <div className="campaign-overview__stats__container">
        <div className="campaign-overview__stats__image__wrapper">
          <img src={campaign.image} alt="campaign" className="campaign-overview__stats__image" />
        </div>
        <div className="campaign-overview__stats">
          <div className="campaign-overview__stats__header">
            Your Customers
          </div>
          <div className="campaign-overview__stats__content">
            <div className="campaign-overview__stats__content__inner">
              <CampaignStats value={clicksValue} percentageChange={clicksPercentage} label="clicks" />
              <CampaignStats value={impressionsValue} percentageChange={impressionsPercentage} label="impressions" />
              <CampaignStats value={cpcValue} percentageChange={cpcPercentage} label="avg CPC" />
            </div>
            <div className="campaign-overview__stats__content__budget">
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
          <CampaignBreakdown campaign={campaign} />
        </div>
      </div>
    )

    return (
      <div className="campaign-overview__container">
        <CampaignOverviewNav campaign={campaign} />
        {campaignDetails}
        {campaignStats}
        {campaignBreakdown}
      </div>
    )
  }
}

CampaignOverview.propTypes = {
  loading: bool.isRequired,
  campaign: object,
  dispatch: func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  campaign: state.campaign
})

export default connect(mapStateToProps)(CampaignOverview)