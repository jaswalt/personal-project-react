import { transformRepoData } from '../utils/transformRepos';
import { transformPullRequestsData } from '../utils/transformPullRequests';

const BASE_URL = 'https://api.github.com/users/';

// TO DO: combine requests?
export const apiGetUserRepos = username => fetch(`${BASE_URL}${username}/events`)
  .then(response => response.json())
  .then(data => transformRepoData(data));

export const apiGetUserPullRequests = username => fetch(`${BASE_URL}${username}/events`)
.then(response => response.json())
.then(data => transformPullRequestsData(data));

// TO DO:
// const getDataService = (request, transform) => (params) => request(params).then(transform);
