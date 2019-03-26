import * as types from "./index";
import { apiGetUserPullRequests } from "../api";

// NORMAL ACTIONS

export const prsAreLoading = bool => ({
  type: types.PRS_ARE_LOADING,
  loading: bool
});

export const prsFetchSuccess = userPullRequests => ({
  type: types.PRS_FETCH_SUCCESS,
  userPullRequests
});

export const prsFetchFailure = bool => ({
  type: types.PRS_FETCH_FAILURE,
  error: bool
});

// ASYNC THUNK ACTIONS

export const fetchUserPullRequests = username => dispatch => {
  dispatch(prsAreLoading(true));

  apiGetUserPullRequests(username).then(
    resp => dispatch(prsFetchSuccess(resp)),
    () => dispatch(prsFetchFailure(true))
  );
};
