import React, { Component } from 'react';
import axios from 'axios';

class Font extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: ''
        };
        this.handleChangeOption = this.handleChangeOption.bind(this);
    }
    componentDidMount() {
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data.items,
              link: ''
            });
        });
    }
    handleChangeOption(e) {
        let id = e.target.options[e.target.selectedIndex].id;
        let font_name = this.state.data[id].family;
        this.setState({
            name: font_name
        });
    }
    render() {
        return(
            <div>
                <link rel="stylesheet" type="text/css" href={`https://fonts.googleapis.com/css?family=`+`${this.state.name}`}/>
                <section className="wrapper" style={{textAlign: 'center'}}>
                    <h2 style={{textAlign: 'center'}}>Google Fonts Library</h2>
                    <hr />
                    <p className="about-library">The Google Fonts Library is an interactive directory of free hosted application programming interfaces for web fonts. There are over 800 font families available through the main website. All the files are accessible through <a href='https://github.com/google/fonts'>Github's</a> repository</p>
                    <select className="dropdown" onChange={this.handleChangeOption}>
                        {this.state.data.map((font, index) => <option id={index} key={font.family}>{font.family}</option>)}
                    </select>
                    <div className="color-font">
                        <p style={{
                            fontFamily: `${this.state.name}, sans-serif`,
                            marginTop: '2em',
                            color: '#494C4E',
                            textAlign: 'center',
                            fontWeight: '700',
                            padding: '0.25em',
                            fontSize: '1.2em'
                        }}>The quick brown fox jumps over the lazy dog</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Font;