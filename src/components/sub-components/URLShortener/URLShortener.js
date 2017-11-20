import React, { Component } from 'react';
import url_shortner from 'node-url-shortener';

class URLShortener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortURL: '',
            longUrl: '',
        }
        this.getShortURL = this.getShortURL.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnMount() {
        this._isMounted = false;
    }

    getShortURL(e) {
        e.preventDefault();
        url_shortner.short(`https://is.gd/create.php?format=simple&url=${this.state.longUrl}`, (err, url) => {
            this.setState({
                shortURL: url
            });

            if(err) {
                console.log(err);
            }
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
                    <p className="about-library">URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page. This is achieved by using a redirect which links to the web page that has a long URL.</p>
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
                            <input type="submit" className='submit'/>
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