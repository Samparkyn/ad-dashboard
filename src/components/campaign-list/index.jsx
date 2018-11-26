import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CampaignRow } from '../CampaignRow'

import './styles.scss'

const campaignData = require('../../mock-campaign-data.json')

const campaignRows = campaignData.map(campaign => {
  return (
    <Link className="row__link" to={`/campaign/${campaign.id}`}>
      <CampaignRow campaign={campaign} />
    </Link>
  )
})

export class CampaignList extends Component {
  render() {
    return (
      <div className="list__container">
        {campaignRows}
        <button>Create A Campaign</button>
      </div>
    )
  }
}