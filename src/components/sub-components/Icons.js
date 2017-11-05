import React, { Component } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

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
              data: res.data
            });
        })
        .catch((error) => {
            alert('Something went wrong !', error);
        });
    }
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
                <section className='wrapper'>
                    <h2 style={{textAlign: 'center'}}>Material Design Icons</h2>
                    <hr />
                    <p className="about-library">The Material Design Icons by Google are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a UI.</p>

                    <div className="wrap-icons">
                        {Object.values(this.state.data).map((icon, index) => {
                            return ([
                                <i data-tip data-for={icon.class} id={icon.label} key={index} className='material-icons icons'>{icon.class}</i>,
                                <ReactTooltip id={icon.class} type="dark" effect="solid" place="top">
                                    <span>
                                        <code>&lt;i class='material-icons'>{icon.class}&lt;/i></code>
                                    </span>
                                </ReactTooltip>
                            ]);
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

export default Icons;