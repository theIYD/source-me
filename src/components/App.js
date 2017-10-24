import '../assets/css/App.scss';
import React, { Component } from 'react';

import Page1 from './Page1';
import Page2 from './Page2';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <About />
  },
  {
    path: '/page1',
    main: () => <Page1 />
  },
  {
    path: '/page2',
    main: () => <Page2 />
  }
];

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Router>
        <div>
          <div className="navbar">
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/page1">page1</Link></li>
              <li><Link to="/page2">page2</Link></li>
            </ul>
          </div>
          <div className="content container">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
          </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
