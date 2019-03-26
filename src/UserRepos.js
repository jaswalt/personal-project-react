import React from "react";

export const UserRepos = ({ userRepos, loading }) => (
  <div>
    <h1>Forked Repositories</h1>
    {loading ? (
      "..."
    ) : userRepos.length > 0 ? (
      <ul>
        {userRepos.map(({ url, name }, i) => (
          <li key={`repo-${i}`}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    ) : (
      "There are no recent forked repositories for this user"
    )}
  </div>
);
