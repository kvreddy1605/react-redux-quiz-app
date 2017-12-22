import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Assessment from './containers/Assessment/Assessment';
import Header from './components/Header/Header';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Assessment} />
      </div>
    );
  }
}

export default App;
