import React, { Component } from 'react';
import { Router } from 'react-router';

import Header from './components/header';
import { Footer } from './components/footer';
import SideNav from './components/sidenav';
import Grid from '@material-ui/core/Grid/Grid';
//import { Provider } from 'react-redux'
// import { createStore } from 'redux'

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
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <SideNav />
              </Grid>
              <Grid className="app__content" item xs={10}>
                <Routes />
                <Footer />
              </Grid>
            </Grid>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
