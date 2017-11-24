import '../assets/css/App.scss';
import React, { Component } from 'react';
import Nav from './Nav';

import CDN from './sub-components/CDN/CDN';
import Font from './sub-components/Font/Font';
import Colors from './sub-components/Colors/Colors';
import Icons from './sub-components/Icons/Icons';
import Epsum from './sub-components/Epsum/Epsum';
import URLShortener from './sub-components/URLShortener/URLShortener';
import EmojiPicker from './sub-components/EmojiPicker/EmojiPicker';
import ImageCompressor from './sub-components/ImageCompressor/ImageCompressor';

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
  },
  {
    path: '/imagecompress',
    main: () => <ImageCompressor />
  }
];

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;  
  }

  render() {
    return (
      <div id="app">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
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
