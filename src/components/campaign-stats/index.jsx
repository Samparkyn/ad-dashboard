import React from 'react';
import classnames from 'classnames';
import { string, number, oneOfType } from 'prop-types';

import './styles.scss'

export const CampaignStats = ({ value, percentageChange, label }) => {
  return (
    <div className="campaign-stats__container">
      <div className="campaign-stats__details">
        <div className="campaign-stats__number">{value}</div>
        <div className="campaign-stats__label">{label}</div>
      </div>
      {percentageChange ?
        <div className={classnames('campaign-stats__percentage', {
          'campaign-stats__percentage-green': percentageChange >= 0,
          'campaign-stats__percentage-red': percentageChange < 0
        })}>
          {`${percentageChange >= 0 ? '+' : ''}${percentageChange}`}%
    </div> : ''
      }
    </div>
  )
};

CampaignStats.propTypes = {
  // the actual number count to display (eg. 14000)
  value: oneOfType([number, string]).isRequired,
  // the percentage value (eg. 10 or -20)
  percentageChange: number,
  // text to show under the value (eg. "clicks" or "impressions" )
  label: string.isRequired
}