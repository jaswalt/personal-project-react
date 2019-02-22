import React, { Component, mapStateToProps, mapDispatchToProps } from 'react';
import { connect } from 'react-redux';

import UsernameForm from './UsernameForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsernameForm />
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
