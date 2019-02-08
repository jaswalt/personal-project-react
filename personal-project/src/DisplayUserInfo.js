import React from 'react';
import UserRepos from './UserRepos.js';
import UserPullRequests from './UserPullRequests.js';

const DisplayUserInfo = props => (
  <div>
    <UserRepos userRepos={props.userRepos} />
    <UserPullRequests userPullRequests={props.userPullRequests} />
  </div>
);

export default DisplayUserInfo;