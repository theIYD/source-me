import React, { Component } from 'react';
import axios from 'axios';

class CDN extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeOption = this.handleChangeOption.bind(this);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data.results,
              link: ''
            });
        });
    }
    handleChangeOption(e) {
        let id = e.target.options[e.target.selectedIndex].id;
        let cdn_link = this.state.data[id].latest;
        this.setState({
            link: cdn_link
        });
    }

    render() {
        return (
            <div>
                <section className="wrapper cdn">
                    <h2>Content Delivery Network Library</h2>
                    <hr />
                    <p className="about-library">CDNJS is one of the most famous free and public web front-end CDN services which is used by ~2,380,000 websites worldwide</p>
                    <select className="dropdown" onChange={this.handleChangeOption}>
                        {this.state.data.map((each, index) => <option id={index} key={each.name}>{each.name}</option>)}
                    </select>
                    <div className="color-cdn-link">
                        <p className="cdn-link">{this.state.link}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default CDN;