import React from 'react';
import { UserRepos } from './UserRepos.js';
import { UserPullRequests } from './UserPullRequests.js';

export const DisplayUserInfo = props => (
  <div>
    <UserRepos userRepos={props.userRepos} />
    <UserPullRequests userPullRequests={props.userPullRequests} />
  </div>
);
