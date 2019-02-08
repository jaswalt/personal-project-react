import React from 'react';

const UserRepos = ({userRepos}) => (
  <div>
    <h1>Repos</h1>
      <ul>
        {userRepos.map((repo, i) => <li key={`repo-${i}`}><a href={repo.url}>{repo.name}</a></li>)}
      </ul>
  </div>
);

export default UserRepos;