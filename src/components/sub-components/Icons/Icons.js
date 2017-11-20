import React, { Component } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import { ClipLoader } from 'react-spinners';

class Icons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: '',
            isError: false,
            loading: true
        }
    }
    componentDidMount() {
        this._isMounted = true;
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data
            });
        })
        .catch((error) => {
            this.setState({
                error: error,
                isError: true
            });
        });
    }

    componentWillUnMount() {
        this._isMounted = false;    
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
                        {
                            ((!this.state.data.length) ? (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ClipLoader
                                        color={'#283593'}
                                        loading={this.state.loading}
                                    />
                                </div>
                            ) : (
                                Object.values(this.state.data).map((icon, index) => {
                                    return ([
                                        <i data-tip data-for={icon.class} id={icon.label} key={index} className='material-icons icons'>{icon.class}</i>,
                                        <ReactTooltip id={icon.class} key={icon.label} type="dark" effect="solid" place="top">
                                            <span>
                                                <code>&lt;i class='material-icons'>{icon.class}&lt;/i></code>
                                            </span>
                                        </ReactTooltip>
                                    ]);
                                })
                            ))
                        }
                    </div>
                    {
                        ((this.state.isError) 
                        ? (<div className="wrap-error" style={{
                            textAlign: 'center',
                            margin: '20px auto',
                            backgroundColor: '#EF9A9A',
                            padding: '12px 20px'
                            
                        }}>
                            <p style={{
                                color: '#D50000'
                            }}><strong style={{
                                color: '#D50000'
                            }}>Error:</strong> Something did not work. Check your internet connection.</p>
                            </div>)
                        : null)
                    }
                </section>
            </div>
        );
    }
}

export default Icons;