import '../assets/css/App.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';

import CDN from './sub-components/CDN';
import Font from './sub-components/Font';
import Colors from './sub-components/Colors';
import Icons from './sub-components/Icons';
import Epsum from './sub-components/Epsum';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const routes = [
  {
    path: '/font',
    exact: true,
    main: () => <Font url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw' />
  },
  {
    path: '/epsum',
    main: () => <Epsum url="https://baconipsum.com/api/?type=meat-and-filler" />
  },
  {
    path: '/cdn',
    main: () => <CDN url='https://api.cdnjs.com/libraries' />
  },
  {
    path: '/icons',
    main: () => <Icons url='https://api.myjson.com/bins/fzihv' />
  },
  {
    path: '/colors',
    main: () => <Colors url='https://gist.githubusercontent.com/amitzur/6ef49f01a662bae992a4/raw/93d6836dcaadb997314944edc3f6a09a11ebecb7/colors.json' />
  }
];


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleModal() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

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
              <h5><Link to="/colors">Material Colors from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/cdn">Content Delivery Networks Library from <strong>cdnjs</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/font">Fonts from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/icons">Icons from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/epsum">Epsum Generator from <strong>bacon ipsum</strong></Link></h5>
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
              <h6><a><button style={{
                backgroundColor: 'transparent',
                backgroundRepeat: 'no-repeat',
                border: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                outline: 'none'
              }} onClick={this.toggleModal}>About</button></a></h6>
              <Modal isOpen={this.state.isActive}>
                <About toggle={this.toggleModal} />
              </Modal>
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
