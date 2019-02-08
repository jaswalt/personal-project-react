import React, { Component } from 'react';
import { getGithubUserRepos, getGithubUserPullRequests } from './utils/getGithubUser.js';
import DisplayUserInfo from './DisplayUserInfo.js';
import NoUser from './NoUser.js';

class UsernameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      userRepos: [],
      userPullRequests: [],
      displayUser: false,
    }

    this.handleChange = (this.handleChange.bind(this));
    this.handleSubmit = (this.handleSubmit.bind(this));
  };

  handleChange(e) {
    this.setState({ usernameValue: e.target.value });
  };

  handleSubmit(e) {
    const reposPromise = getGithubUserRepos(this.state.usernameValue)
      .then(repo => this.setState({ userRepos: repo }))
      .catch(err => this.setState({ error: err }));

    const pullsPromise = getGithubUserPullRequests(this.state.usernameValue) 
      .then(pullReqs => this.setState({ userPullRequests: pullReqs}))
      .catch(err => this.setState({ error: err }));

    Promise.all([reposPromise, pullsPromise]).then(this.setState({ displayUser: true }));

    e.preventDefault()
  };

  render () {
    const noUser = <NoUser />;
    const displayUser = <DisplayUserInfo userRepos={this.state.userRepos} userPullRequests={this.state.userPullRequests} />;

    return (
      <div>
        <form id='username-form' onSubmit={this.handleSubmit}>
          <label htmlFor='username-input'>GitHub Username</label>
          <input 
            type='text' 
            id='username-input' 
            placeholder='username' 
            value={this.state.usernameValue}
            onChange={this.handleChange}
            required>
          </input>
          <button type='submit'>Submit</button>
        </form>
        {this.state.displayUser ? displayUser : noUser}
      </div>
    );
  };
};

export default UsernameForm;