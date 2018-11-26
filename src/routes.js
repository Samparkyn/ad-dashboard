import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import CampaignList from './components/campaign-list';
import CampaignOverview from './components/campaign-overview';

export const Routes = () => (
  <>
    <Route exact path="/" render={() => <Redirect to="/campaigns" />} />
    <Route exact path="/campaigns" component={CampaignList} />
    <Route exact path="/campaign/:id" component={CampaignOverview} />
  </>
)