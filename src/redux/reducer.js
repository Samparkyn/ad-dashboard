import {
  LOAD_CAMPAIGNS_FAILURE,
  LOAD_CAMPAIGNS_SUCCESS,
  LOAD_CAMPAIGNS_REQUEST,
  LOAD_CAMPAIGN_FAILURE,
  LOAD_CAMPAIGN_REQUEST,
  LOAD_CAMPAIGN_SUCCESS
} from './types';

const initialState = {
  loading: false,
  error: '',
  campaigns: [],
  campaign: {}
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CAMPAIGNS_REQUEST: {
      return {
        ...state,
        loading: true,
        campaigns: initialState.campaigns
      }
    }
    case LOAD_CAMPAIGN_REQUEST: {
      return {
        ...state,
        loading: true,
        campaign: initialState.campaign
      }
    }
    case LOAD_CAMPAIGN_FAILURE:
    case LOAD_CAMPAIGNS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case LOAD_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: initialState.error,
        campaign: action.payload
      }
    }
    case LOAD_CAMPAIGNS_SUCCESS: {
      return {
        loading: false,
        error: initialState.error,
        campaigns: action.payload
      }
    }

    default:
      return state
  }
}