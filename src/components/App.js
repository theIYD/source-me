import '../assets/css/App.scss';
import React, { Component } from 'react';
import Nav from './Nav';

const remote = require('electron').remote;

import CDN from './sub-components/CDN';
import Font from './sub-components/Font';
import Colors from './sub-components/Colors';
import Icons from './sub-components/Icons';
import Epsum from './sub-components/Epsum';
import URLShortener from './sub-components/URLShortener';
import EmojiPicker from './sub-components/EmojiPicker/EmojiPicker';

import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const routes = [
  {
    path: './',
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
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;  
  }

  closeWindow() {
    let currentWindow = remote.getCurrentWindow();
    currentWindow.close();
  }

  render() {
    return (
      <div id="app">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
        <button onClick={this.closeWindow.bind(this)} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: '999999',
          background: 'transparent',
          border: 'none',
          fontWeight: 'bold',
          WebkitTextStroke: '2px',
          cursor: 'pointer'
        }} id="close" type="button">
          <span><i className="material-icons">&#xE5CD;</i></span>
        </button>
        <Router>
          <Switch>
            <div style={{display: 'flex', height: '100%'}}>
              <Nav />
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
