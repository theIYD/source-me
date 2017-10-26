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
        <div style={{display: 'flex'}}>
          <nav className="navbar">
            <div className="nav-category">
              <h3>Tools &amp; Utilities</h3>
            </div>
            <div className="nav-item">
              <h5><Link to="/">Material Colors from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/page1">Content Delivery Networks Library from <strong>cdnjs</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/page2">Fonts from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Icons from <strong>IonIcons</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Epsum Generator from <strong>bacon ipsum</strong></Link></h5>
            </div>
            <div className="nav-category learning">
              <h3>Learning Library</h3>
            </div>
            <div className="nav-sub-category">
              <h4>HyperText Markup Language</h4>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Basics</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Tables</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Lists</Link></h5>
            </div>
            <div className="nav-sub-category">
              <h4>Cascading Style Sheet</h4>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Basics</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Tables</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Lists</Link></h5>
            </div>
            <div className="nav-sub-category">
              <h4>Javascript</h4>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Basics</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Tables</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Lists</Link></h5>
            </div>
          </nav>

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
