import React from 'react';
import { Route } from 'react-router-dom'
import { CampaignList } from './components/CampaignList';
import { CampaignOverview } from './components/campaign-overview';

export const Routes = () => (
  <>
    <Route exact path="/campaign-overview" component={CampaignList} />
    <Route exact path="/campaign/:id" component={CampaignOverview} />
  </>
)