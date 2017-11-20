import React, { Component } from 'react';
import homeLogo from '../assets/images/house.png';

class Home extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}>
                <span title='Start by navigating tools on your left'><img style={{
                    width: '80px',
                    height: '80px',
                    opacity: '0.3'
                }} src={homeLogo} alt="You are home." />
                </span>
            </div>
        );
    }
}

export default Home;