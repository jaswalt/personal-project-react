import * as types from "../actions";

const initialState = {
  loading: false,
  error: false,
  displayRepos: false,
  userRepos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REPOS_ARE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case types.REPOS_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        displayRepos: true,
        userRepos: [action.userRepos]
      };
    }
    // TO DO: decide on next state
    // clear current repos and prs displayed? or show error alongside them?
    case types.REPOS_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default: {
      return state;
    }
  }
};
