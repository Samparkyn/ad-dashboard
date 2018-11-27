import React, { Component } from 'react';
import { Router } from 'react-router';

import Header from './components/app-header';
import { Footer } from './components/footer';
import SideNav from './components/side-nav';

import { Provider } from 'react-redux'

import createBrowserHistory from "history/createBrowserHistory";
import { Routes } from './routes'
import store from './redux/store'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Router history={history}>
            <>
              <Header />
              <div className="app__container">
                <SideNav />
                <div className="app__content">
                  <Routes />
                  <Footer />
                </div>
              </div>
            </>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
