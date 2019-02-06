import React, { Component } from 'react';
import { getGithubUserRepos, getGithubUserPullRequests } from './utils/getGithubUser.js';

class UsernameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
    }

    this.handleChange = (this.handleChange.bind(this));
    this.handleSubmit = (this.handleSubmit.bind(this));
  };

  handleChange(e) {
    this.setState({ usernameValue: e.target.value });
  };

  handleSubmit(e) {
    getGithubUserRepos(this.state.usernameValue);
    getGithubUserPullRequests(this.state.usernameValue);
    e.preventDefault();
  };

  render () {
    return (
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
    );
  };
};

export default UsernameForm;