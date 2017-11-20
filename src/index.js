import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'Roboto:300,400,500,900', 'sans-serif']
    }
});

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Now we can render our application into it
render( <App />, document.getElementById('root') );
