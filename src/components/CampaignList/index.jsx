import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CampaignRow } from '../CampaignRow/index'

import './campaign-list.scss'

const campaignData = require('../../mock-campaign-data.json')
console.log('data', campaignData)

const campaignRows = campaignData.map(campaign => {
  return (
    <Link className="row__link" to="/">
      <CampaignRow campaign={campaign} />
    </Link>
  )
})

export class CampaignList extends Component {
  render() {
    return (
      <div className="list__container">
        {campaignRows}
      </div>
    )
  }
}