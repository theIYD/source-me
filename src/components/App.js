import '../assets/css/App.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';

const shell = require('electron').shell;

import CDN from './sub-components/CDN';
import Font from './sub-components/Font';
import Colors from './sub-components/Colors';
import Icons from './sub-components/Icons';
import Epsum from './sub-components/Epsum';
import URLShortener from './sub-components/URLShortener';
import EmojiPicker from './sub-components/EmojiPicker/EmojiPicker';

import Home from './Home';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const routes = [
  {
    path: '/index.html',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/font',
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
  },
  {
    path: '/urlshortner',
    main: () => <URLShortener />
  },
  {
    path: '/emojis',
    main: () => <EmojiPicker url='https://raw.githubusercontent.com/theIYD/source-me/development/src/components/sub-components/EmojiPicker/emojis.json' />
  }
];


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      main: ``
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;  
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleModal() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  openLink() {
    shell.openExternal('https://theiyd.github.io/theidrees.me');
  }

  render() {
    return (
      <div id="app">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
        <Router>
        <Switch>
        <div style={{display: 'flex', height: '100%'}}>
          <nav className="navbar">
            <div className="nav-category">
              <h3>Tools &amp; Utilities</h3>
            </div>
            <div className="nav-item">
              <h5><Link to="/colors"><i className="material-icons md-dark md-36 m-icon">&#xE891;</i>Material Colors from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/cdn"><i className="material-icons md-dark md-36 m-icon">&#xE252;</i>Content Delivery Networks Library from <strong>cdnjs</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/font"><i className="material-icons md-dark md-36 m-icon">&#xE245;</i>Fonts from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/icons"><i className="material-icons md-dark md-36 m-icon">&#xE1BD;</i>Material icons from <strong>Google</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/epsum"><i className="material-icons md-dark md-36 m-icon">&#xE234;</i>Epsum Generator from <strong>bacon ipsum</strong></Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/urlshortner"><i className="material-icons md-dark md-36 m-icon">&#xE250;</i>URL Shortner</Link></h5>
            </div>
            <div className="nav-item">
              <h5><Link to="/emojis"><i className="material-icons md-dark md-36 m-icon">&#xE24E;</i>Emoji Picker</Link></h5>
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
              <Link onClick={this.openLink.bind(this)} to="/#"><p>Developed with &#128156; by <strong>Idrees</strong></p></Link>
            </footer>
          </nav>
          <div id="main" className="content container">
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
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
