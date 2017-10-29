import React, { Component } from 'react';
import axios from 'axios';

class Epsum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            text: 'Generate'
        }
        this.toggleEpsum = this.toggleEpsum.bind(this);
    }
    toggleEpsum() {
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data,
              text: 'Regenerate'
            });
        });
    }
    render() {
        return (
            <div>
                <section className="wrapper">
                    <h2 style={{textAlign: 'center'}}>Epsum Ipsum</h2>
                    <hr />
                    <p className="about-library">Epsum ipsum(a.k.a lorem ipsum) is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation.</p>

                    <div className="wrap-ipsum">
                        <p>{this.state.data}</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                    <button style={{
                        margin: '20px auto 0 auto',
                        boxShadow: '0 1px 4px rgba(0, 0, 0, .6)',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        backgroundColor: '#1565C0',
                        color: '#fff',
                        borderRadius: '2px',
                        outline: 'none',
                        overflow: 'hidden',
                        border: 'none',
                        textAlign: 'center'
                    }} onClick={this.toggleEpsum}>{this.state.text}</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Epsum;