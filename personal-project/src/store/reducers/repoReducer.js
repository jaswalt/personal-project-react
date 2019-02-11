import * as types from '../actions';

const initialState = {
  loading: false,
  error: false,
  displayRepos: false,
  userRepos: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REPOS_ARE_LOADING: {
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    }
    case types.REPOS_FETCH_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        error: false,
        displayRepos: true,
        userRepos: [action.userRepos],
      });
    }
    case types.REPOS_FETCH_FAILURE: {
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
