import React, { Component } from 'react';
import { Router } from 'react-router'

import Header from './components/Header/index'
import SideNav from './components/SideNav/index'
import Grid from '@material-ui/core/Grid/Grid'
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
      <div className="app">
        <Router history={history}>
          <>
            <Header />
            <Grid container spacing={0} className="app__content">
              <Grid item xs={2}>
                <SideNav />
              </Grid>
              <Grid item xs={10}>
                <Routes />
              </Grid>
            </Grid>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
