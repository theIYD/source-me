import React, { Component } from 'react';
import logo from '../assets/images/logo.png';

class About extends React.Component {

    render() {
      return (
         <div className="about" style={{
           position: 'absolute',
           top: '0',
           left: '0',
           right: '0',
           bottom: '0',
           overflowX: 'hidden',
           overflowY: 'auto',
           padding: '0 2em'
         }}>
          <img src={logo} className="logo" />
          <h1>Source Me</h1>
          <hr style={{
            border: '1px solid #E0E0E0',
            width: '40%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px'
          }} />
          <div className="about-sourceme">
            <p>Source Me is a small application which provides the necessary tools while developing a web application. The need for this application was because i was too lazy to go to the web & search for the packages, or fonts, or material design colors. So a small app was to be built to provide the necessary resources in a single click ! </p>
          </div>
          <p style={{
            marginTop: '50px',
            fontSize: '20px'
          }}>&#128153;&#128156;&#128154;</p>
        </div>
      );
    }
  }
  
  export default About;