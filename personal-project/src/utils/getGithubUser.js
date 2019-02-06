export const getGithubUserRepos = username => fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    const forked = data.filter(repo => repo.fork === true ? repo : null)
      .reduce((acc, curr) => 
        [...acc, 
          {
            name: curr.name,
            url: curr.url,
          }
        ]
      , []);
  
    return forked;
  });

export const getGithubUserPullRequests = username => fetch(`https://api.github.com/users/${username}/events`)
  .then(response => response.json())
  .then(data => {
    const pullRequests = data.filter(event => event.type === 'PullRequestEvent' ? event : null)
      .reduce((acc, curr) =>
        [...acc,
          {
            title: curr.payload.pull_request.title,
            url: curr.payload.pull_request.url,
            status: curr.payload.pull_request.state,
          }
        ]
      , []);
      
    return pullRequests;
  });