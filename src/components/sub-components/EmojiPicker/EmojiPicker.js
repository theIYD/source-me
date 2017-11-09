import React, { Component } from 'react';
import axios from 'axios';

import EmojiModal from './EmojiModal';

class EmojiPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isActive: false,
            currentEmojiCode: '',
            currentEmoji: ''
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    componentDidMount() {
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data
            });
        });
    }

    toggleModal(e) {
        this.setState({
            isActive: !this.state.isActive,
            currentEmojiCode: e.target.getAttribute('data-emoji-code'),
            currentEmoji: e.target.getAttribute('data-emoji')
        });
    }
    
    render() {
        return (
            <div>
            <section className="wrapper">
                <h2 style={{textAlign: 'center'}}>Emoji Picker</h2>
                <hr />
                <div className="wrap-emojis" style={{textAlign: 'center'}}>
                {this.state.data.map((emoji, index) => {
                    return (
                        <div onClick={this.toggleModal} key={emoji.name} data-emoji={emoji.char} data-emoji-code={emoji.code} style={{
                            display: 'inline-flex',
                            width: '20px',
                            height: '20px',
                            padding: '30px',
                            margin: '10px',
                            borderRadius: '2px',
                            boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '20px'
                        }}>{emoji.char}</div>
                        );
                    })}
                    {this.state.isActive ? 
                        <EmojiModal emoji={this.state.currentEmoji} emojiCode={this.state.currentEmojiCode} toggle={this.toggleModal} />
                        : null
                      }
                </div>
            </section>
        </div>
        );
    }
}

export default EmojiPicker;