export const transformRepoData = data => {
  const forkedRepos = data.filter(({type}) => type === 'ForkEvent')
    .reduce((acc, {payload: { forkee: { name } }, repo}) => 
      [...acc, 
        {
          name,
          url: `https://github.com/${repo.name}`,
        }
      ]
    , [])    
    return forkedRepos;
};
