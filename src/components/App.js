import '../assets/css/App.scss';
import React, { Component } from 'react';

import CDN from './sub-components/CDN';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <About />
  },
  {
    path: '/colors',
    exact: true,
    main: () => <Page2 />
  },
  {
    path: '/cdn',
    main: () => <CDN url='https://api.cdnjs.com/libraries' />
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
              <h5><Link to="/#">Material Colors from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/cdn">Content Delivery Networks Library from <strong>cdnjs</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/#">Fonts from <strong>Google</strong></Link></h5>
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
            <footer className="about-navigate">
              <h6><Link to="/">About</Link></h6>
              <Link to="/#"><p>Developed with &#128156; by <strong>Idrees</strong></p></Link>
            </footer>
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
