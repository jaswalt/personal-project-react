import * as types from '../actions';

const initialState = {
  loading: false,
  error: false,
  displayPullRequests: false,
  userPullRequests: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.PRS_ARE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.PRS_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        displayPullRequests: true,
        userPullRequests: [action.userPullRequests],
      };
    }
    // TO DO: decide on next state
    // clear current repos and prs displayed? or show error alongside them?
    case types.PRS_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
}
