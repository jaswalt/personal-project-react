import React from 'react';

export const UserPullRequests = ({userPullRequests}) => (
  <div>
    <h1>Pull Requests</h1>
      <ul>
        {userPullRequests.map((pr, i) => <li key={`pr-${i}`}><a href={pr.url}>{pr.title}, {pr.status}</a></li>)}
      </ul>
  </div>
);
