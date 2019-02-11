import * as types from './index';
import { apiGetUserPullRequests } from '../api';

// NORMAL ACTIONS

export function prsAreLoading(bool) {
  return {
    type: types.PRS_ARE_LOADING,
    loading: bool,
  };
};

export function prsFetchSuccess(userPullRequests) {
  return {
    type: types.PRS_FETCH_SUCCESS,
    userPullRequests,
  };
};

export function prsFetchFailure(bool) {
  return {
    type: types.PRS_FETCH_FAILURE,
    error: bool,
  };
};

// ASYNC THUNK ACTIONS

export function fetchUserPullRequests(username) {
  return (dispatch) => {
    dispatch(prsAreLoading(true));

    apiGetUserPullRequests(username)
      .then(
        resp => dispatch(prsFetchSuccess(resp)),
        () => dispatch(prsFetchFailure(true)),
      );
  };
};