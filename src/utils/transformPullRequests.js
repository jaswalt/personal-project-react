export const transformPullRequestsData = data => {
  const userPullRequests = data.filter(({type}) => type === 'PullRequestEvent')
    .reduce((acc, {payload: { pull_request: { title, html_url, state }}}) =>
      [...acc,
        {
          title,
          url: html_url,
          status: state,
        }
      ]
    , []);
    
  return userPullRequests;
};
