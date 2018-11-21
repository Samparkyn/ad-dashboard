import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header/index'

export const Routes = () => (
  <div className="app">
    <Header />
    <main className="app__body">
      <Route exact path="/" />
    </main>
  </div>
)