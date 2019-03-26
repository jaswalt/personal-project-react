import React from "react";
import { UserRepos } from "./UserRepos.js";
import { UserPullRequests } from "./UserPullRequests.js";

// TO DO: create one generalized component for both repos and prs, map individual values to it
export const DisplayUserInfo = props => (
  <div>
    <UserRepos userRepos={props.userRepos} loading={props.reposLoading} />
    <UserPullRequests
      userPullRequests={props.userPullRequests}
      loading={props.pullRequestsLoading}
    />
  </div>
);
