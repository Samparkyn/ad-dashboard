import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CampaignRow } from '../campaign-row'
import { connect } from 'react-redux';
import { array, func, bool } from 'prop-types';
import { loadCampaigns } from '../../redux/actions';
import './styles.scss'

export class CampaignList extends Component {
  componentDidMount() {
    this.props.dispatch(loadCampaigns())
  }

  render() {
    const { campaigns, loading } = this.props;

    if (loading) {
      // put a nice little spinner
      return <div>Loading...</div>
    };

    const campaignRows = campaigns.map(campaign => (
      <Link key={campaign.id} className="row__link" to={`/campaign/${campaign.id}`}>
        <CampaignRow campaign={campaign} />
      </Link>
    ))

    return (
      <div className="list__container">
        {campaignRows}
        <div className="list__container__button">
          <button>Create A Campaign</button>
        </div>
      </div>
    )
  }
}

CampaignList.propTypes = {
  loading: bool.isRequired,
  campaigns: array.isRequired,
  dispatch: func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  campaigns: state.campaigns
})

export default connect(mapStateToProps)(CampaignList)