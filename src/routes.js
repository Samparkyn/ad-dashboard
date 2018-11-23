import React from 'react';
import { Route } from 'react-router-dom'
import { CampaignList } from './components/CampaignList';

export const Routes = () => (
  <>
    <Route exact path="/campaign-overview" component={CampaignList} />
  </>
)