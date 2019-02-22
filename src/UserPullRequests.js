import React from 'react';

// TO DO: display "status" property better
export const UserPullRequests = ({ userPullRequests, loading }) => (
  <div>
    <h1>Pull Requests</h1>
      { loading ? 
        '...'
        :
        userPullRequests.length > 0 ?
          <ul>
            {userPullRequests.map(({ url, title, status }, i) => 
              <li key={`pr-${i}`}>
                <a href={url}>{title}, {status}</a>
              </li>
            )}
          </ul>
        :
          'There are no recent pull requests made by this user'
      }
  </div>
);
