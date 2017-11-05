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
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?'+ // port
        '(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
        '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        
      if(!pattern.test(this.state.longUrl)) {
        alert("Please enter a valid URL.");
        document.querySelector('#url-form').reset();

      } else {
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
          }, (error) => {
                alert('Something went wrong. ${error}');
                document.querySelector('#url-form').reset();
          });
      }
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
                    <div className="wrap-input" style={{textAlign: 'center'}}>
                        <form id="url-form" onSubmit={this.getShortURL}>
                            <input style={{
                                width: '360px',
                                background: '#fff',
                                color: '#a3a3a3',
                                font: 'inherit',
                                boxShadow: '6px 6px 10px 1px rgba(0, 0, 0, 0.1)',
                                border: '0',
                                outline: '0',
                                padding: '22px 18px',
                                margin: '50px auto 0 auto',
                                display: 'block',
                                textAlign: 'center'
                            }} onChange={event => this.getInput(event)} type="text" placeholder="Place your url" required />
                            <input style={{
                                background: '#7f8ff4',
                                color: '#fff',
                                boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.1)',
                                borderRadius: '2px',
                                padding: '12px 36px',
                                marginTop: '20px',
                                outline: 'none',
                                border: '0',
                                cursor: 'pointer'
                            }} type="submit" />
                        </form>
                        <p style={{
                            fontWeight: 'bold',
                            marginTop: '20px',
                            padding: '12px 36px'
                        }}>{this.state.shortURL}</p>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default URLShortener;