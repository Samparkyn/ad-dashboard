import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header/index'
import SideNav from './components/SideNav/index'

export const Routes = () => (
  <div className="app">
    <Header />
    <SideNav />
    <main className="app__body">
      <Route exact path="/" />
    </main>
  </div>
)