import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserRepos } from './store/actions/repoActions';
import { fetchUserPullRequests } from './store/actions/prsActions';
import { DisplayUserInfo } from './DisplayUserInfo';
import { UsernamePrompt } from './UsernamePrompt';

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
    this.props.fetchUserRepos(this.state.usernameValue)
    this.props.fetchUserPullRequests(this.state.usernameValue)

    e.preventDefault()
  };

  render () {
    const usernamePrompt = <UsernamePrompt />;
    const displayUser = <DisplayUserInfo userRepos={this.props.userRepos[0]} userPullRequests={this.props.userPullRequests[0]} />;

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
        {this.props.displayRepos && this.props.displayPullRequests ? displayUser : usernamePrompt}
      </div>
    );
  };
};

const mapStateToProps = store => ({
  userRepos: store.repos.userRepos,
  userPullRequests: store.prs.userPullRequests,
  displayRepos: store.repos.displayRepos,
  displayPullRequests: store.prs.displayPullRequests,
});

const mapDispatchToProps = {
  fetchUserRepos,
  fetchUserPullRequests,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsernameForm);