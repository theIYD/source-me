import React, { Component } from 'react';
const D_env = require('dotenv').config();

class URLShortener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortURL: '',
            longUrl: ''
        }
        this.getShortURL = this.getShortURL.bind(this);
        this.loadURLShortenerAPI = this.loadURLShortenerAPI.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    loadURLShortenerAPI() {
        const gapiScript = document.createElement('script');
        const API_KEY = process.env.API_KEY;

        gapiScript.src = 'https://apis.google.com/js/api.js';

        gapiScript.onload = () => {
            gapi.load('client', () => {
              gapi.client.setApiKey(API_KEY);
              gapi.client.load('urlshortener', 'v1', () => {
                this.setState({ gapiReady: true });
              });
            });
          };
        document.body.appendChild(gapiScript);
    }

    componentDidMount() {
        this.loadURLShortenerAPI();
    }

    getShortURL(e) {
        e.preventDefault();
        gapi.client.urlshortener.url.insert({
            "resource": {
              "longUrl": this.state.longUrl
            },
            "alt": "json"
          })
          .then((response) => {
            this.setState({
                shortURL: response.result.id
            });
          }, function(error) {
            console.error("Execute error", error);
          });
    }

    getInput(event) {
        this.setState({
            longUrl: event.target.value
        });
    }

    render() {
        return (
            <div>
                <section className='wrapper'>
                    <h2 style={{textAlign: 'center'}}>URL Shortener</h2>
                    <hr />
                    <div className="wrap=input">
                        <input onChange={event => this.getInput(event)} type="text" placeholder="Place your url" />
                        <input type="submit" onClick={this.getShortURL} />
                        <p>{this.state.shortURL}</p>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default URLShortener;