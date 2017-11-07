import React, { Component } from 'react';

class EmojiModal extends Component {
    render() {
        return (
            <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
                <div className='popup'>
                    <div className='popup_inner'>
                        <h1 style={{marginTop: '30px', fontWeight: 'bold'}}>{this.props.emoji}</h1>
                        <button style={{background: 'transparent', cursor: 'pointer', outline: 'none', fontWeight: 'bold', border: 'none'}} onClick={this.props.toggle}><i className="material-icons md-dark md-36">&#xE14C;</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmojiModal;