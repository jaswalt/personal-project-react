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
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    }
    case types.PRS_FETCH_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        error: false,
        displayPullRequests: true,
        userPullRequests: [action.userPullRequests],
      });
    }
    case types.PRS_FETCH_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    }
    default: {
      return state;
    }
  }
}
