import React, { Component } from 'react';

class UsernameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',

    }
  };

  render () {
    return (
      <form id='username-form'>
        <label for='username-input'>GitHub Username</label>
        <input type='text' id='username-input' placeholder='username' value={this.state.usernameValue} required></input>
        <button type='submit'>Submit</button>
      </form>
    );
  };
};

export default UsernameForm;