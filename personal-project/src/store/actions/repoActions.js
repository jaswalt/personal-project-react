import * as types from './index';
import { apiGetUserRepos } from '../api';

// NORMAL ACTIONS

export function reposAreLoading(bool) {
  return {
    type: types.REPOS_ARE_LOADING,
    loading: bool,
  };
};

export function reposFetchSuccess(userRepos) {
  return {
    type: types.REPOS_FETCH_SUCCESS,
    userRepos,
  };
};

export function reposFetchFailure(bool) {
  return {
    type: types.REPOS_FETCH_FAILURE,
    error: bool,
  };
};

// ASYNC THUNK ACTIONS

export function fetchUserRepos(username) {
  return (dispatch) => {
    dispatch(reposAreLoading(true));

    apiGetUserRepos(username)
      .then(
        resp => dispatch(reposFetchSuccess(resp)),
        () => dispatch(reposFetchFailure(true)),
      );
  };
};