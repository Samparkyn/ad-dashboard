import {
  LOAD_CAMPAIGNS_FAILURE,
  LOAD_CAMPAIGNS_SUCCESS,
  LOAD_CAMPAIGNS_REQUEST,
  LOAD_CAMPAIGN_FAILURE,
  LOAD_CAMPAIGN_REQUEST,
  LOAD_CAMPAIGN_SUCCESS
} from './types';

// import axios from 'axios';
// const apiUrl = 'http://localhost:8080';

import mockData from '../mock-campaign-data.json';

export const loadCampaignsRequest = () => ({ type: LOAD_CAMPAIGNS_REQUEST })
export const loadCampaignsSuccess = (data) => ({ type: LOAD_CAMPAIGNS_SUCCESS, payload: data })
export const loadCampaignsFailure = (err) => ({ type: LOAD_CAMPAIGNS_FAILURE, payload: err })

export const loadCampaignRequest = () => ({ type: LOAD_CAMPAIGN_REQUEST })
export const loadCampaignSuccess = (data) => ({ type: LOAD_CAMPAIGN_SUCCESS, payload: data })
export const loadCampaignFailure = (err) => ({ type: LOAD_CAMPAIGN_FAILURE, payload: err })

export const loadCampaigns = () => {
  return (dispatch) => {
    dispatch(loadCampaignsRequest())

    window.setTimeout(() => {
      dispatch(loadCampaignsSuccess(mockData))
    }, 1000)

    // this is how it would look if we had an api to call
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(loadCampaignsSuccess(response.data))
    //   })
    //   .catch(error => {
    //     dispatch(loadCampaignsFailure(err))
    //   });
  };
};

export const loadCampaign = (id) => {
  return (dispatch) => {
    dispatch(loadCampaignRequest())
    const campaign = mockData.find(d => d.id === id);
    dispatch(loadCampaignSuccess(campaign))

    // this is how it would look if we had an api to call
    // return axios.get(apiUrl)
    //   .then(response => {
    //     dispatch(loadCampaignSuccess(response.data))
    //   })
    //   .catch(error => {
    //     dispatch(loadCampaignFailure(err))
    //   });
  };
}