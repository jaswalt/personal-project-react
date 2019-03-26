import * as types from "./index";
import { apiGetUserRepos } from "../api";

// NORMAL ACTIONS

export const reposAreLoading = bool => ({
  type: types.REPOS_ARE_LOADING,
  loading: bool
});

export const reposFetchSuccess = userRepos => ({
  type: types.REPOS_FETCH_SUCCESS,
  userRepos
});

export const reposFetchFailure = bool => ({
  type: types.REPOS_FETCH_FAILURE,
  error: bool
});

// ASYNC THUNK ACTIONS

export const fetchUserRepos = username => dispatch => {
  dispatch(reposAreLoading(true));

  apiGetUserRepos(username).then(
    resp => dispatch(reposFetchSuccess(resp)),
    () => dispatch(reposFetchFailure(true))
  );
};
