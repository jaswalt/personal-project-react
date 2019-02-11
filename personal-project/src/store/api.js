// import axios from 'axios';

// const BASE_URL = 'https://api.github.com/';

export const apiGetUserRepos = username => fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    const forkedRepos = data.filter(repo => repo.fork === true ? repo : null)
      .reduce((acc, curr) => 
        [...acc, 
          {
            name: curr.name,
            url: curr.html_url,
            // fetch(curr.url)
            //   .then(response => response.json())
            //   .then(response => response.parent.html_url),
          }
        ]
      , []);
  
    return forkedRepos;
  });

export const apiGetUserPullRequests = username => fetch(`https://api.github.com/users/${username}/events`)
.then(response => response.json())
.then(data => {
  const userPullRequests = data.filter(event => event.type === 'PullRequestEvent' ? event : null)
    .reduce((acc, curr) =>
      [...acc,
        {
          title: curr.payload.pull_request.title,
          url: curr.payload.pull_request.url,
          status: curr.payload.pull_request.state,
        }
      ]
    , []);
    
  return userPullRequests;
});

// const apiGetBaseRepo = async url => 
//   await axios.get(url).then(resp => resp.parent.html_url);

// export const apiGetUserRepos = async username => {
//   await axios.get(`${BASE_URL}users/${username}/repos`)
//     .then(resp => {
//       const forkedRepos = resp.filter(repo => 
//         repo.fork === true ? repo : null)
//         .reduce((acc, curr) =>
//           [...acc,
//             {
//               name: curr.name,
//               url: apiGetBaseRepo(curr.url),
//             }
//           ]
//         , [])
//       return forkedRepos;
//     });
// };

// export const apiGetUserPullRequests = username =>
//   axios.get(`${BASE_URL}users/${username}/events`)
//     .then(resp => {
//       const userPullRequests = resp.filter(event => event.type === 'PullRequestEvent' ? event : null)
//         .reduce((acc, curr) =>
//           [...acc,
//             {
//               title: curr.payload.pull_request.title,
//               url: curr.payload.pull_request.url,
//               status: curr.payload.pull_request.state,
//             }
//           ]
//         , []);
//       return userPullRequests;
//     });