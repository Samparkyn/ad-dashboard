import React, { Component } from 'react';
import { Router } from 'react-router'
import './App.css';

import createBrowserHistory from "history/createBrowserHistory";
import { Routes } from './routes'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
