import React, { Component } from 'react';
import { Router } from 'react-router'
//import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import './App.scss';

import createBrowserHistory from "history/createBrowserHistory";
import { Routes } from './routes'

const history = createBrowserHistory()
// const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Provider store={store}> */}
        <Router history={history}>
          <Routes />
        </Router>
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
