import React, { Component } from 'react';
import axios from 'axios';

class Icons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data,
            });
        });
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
                <section className='wrapper'>
                    <h2 style={{textAlign: 'center'}}>Material Design Icons</h2>
                    <hr />
                    <p className="about-library">The Google Fonts Library is an interactive directory of free hosted application programming interfaces for web fonts. There are over 800 font families available through the main website. All the files are accessible through <a href='https://github.com/google/fonts'>Github's</a> repository</p>

                    <div className="wrap-icons">
                        {Object.values(this.state.data).map((icon, index) => <i id={icon.label} key={index} className='material-icons'>{icon.class}</i>)}
                    </div>
                </section>
            </div>
        );
    }
}

export default Icons;