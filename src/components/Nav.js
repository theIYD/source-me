import React, { Component } from 'react';
import Modal from 'react-modal';
import pjson from '../../package.json';
import About from './About';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillMount() {
        Modal.setAppElement('body');
      }

    toggleModal() {
        this.setState({
          isActive: !this.state.isActive
        });
      }

    render() {
        return(
            <div>
                <nav className="navbar">
                    `<div className="nav-category">
                        <h3>Tools &amp; Utilities</h3>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/colors"><i className="material-icons md-dark md-36 m-icon">&#xE891;</i>Material Colors from <strong>Google</strong></Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/cdn"><i className="material-icons md-dark md-36 m-icon">&#xE252;</i>Content Delivery Networks Library from <strong>cdnjs</strong></Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/font"><i className="material-icons md-dark md-36 m-icon">&#xE245;</i>Fonts from <strong>Google</strong></Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/icons"><i className="material-icons md-dark md-36 m-icon">&#xE1BD;</i>Material icons from <strong>Google</strong></Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/epsum"><i className="material-icons md-dark md-36 m-icon">&#xE234;</i>Epsum Generator from <strong>bacon ipsum</strong></Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/urlshortner"><i className="material-icons md-dark md-36 m-icon">&#xE250;</i>URL Shortner</Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/emojis"><i className="material-icons md-dark md-36 m-icon">&#xE24E;</i>Emoji Picker</Link></h5>
                    </div>
                    <div className="nav-item">
                        <h5><Link to="/imagecompress"><i className="material-icons md-dark md-36 m-icon">&#xE24E;</i>Image Compress</Link></h5>
                    </div>

                    <footer className="about-navigate">
                        <h6><a><button style={{
                            backgroundColor: 'transparent',
                            backgroundRepeat: 'no-repeat',
                            border: 'none',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            outline: 'none',
                            color: '#fff',
                            position: 'absolute',
                            bottom: '0',
                            left: '280px',
                            marginBottom: '20px',
                            marginRight: '20px',
                            opacity: '0.6',
                            fontSize: '12px'
                        }} onClick={this.toggleModal}>About</button></a></h6>
                        
                        <Modal isOpen={this.state.isActive}>
                            <About toggle={this.toggleModal} />
                        </Modal>
                    </footer>

                        <em style={{
                            position: 'absolute',
                            bottom: '0',
                            marginBottom: '20px',
                            marginLeft: '20px',
                            fontSize: '10px'
                        }} className="version">Version: {pjson.version}</em>
                </nav>
            </div>
        );
    }
}

export default Nav;