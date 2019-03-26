import React, { Component } from "react";
import { Provider } from "react-redux";
import { Store } from "./store";

import UsernameForm from "./UsernameForm.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <UsernameForm />
        </div>
      </Provider>
    );
  }
}

export default App;
