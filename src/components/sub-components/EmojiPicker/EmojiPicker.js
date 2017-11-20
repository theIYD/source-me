import React, { Component } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

import EmojiModal from './EmojiModal';

class EmojiPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isActive: false,
            currentEmojiCode: '',
            currentEmoji: '',
            loading: true
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    componentDidMount() {
        this._isMounted = true;
        axios.get(`${this.props.url}`)
        .then(res => {
          this.setState({ 
              data: res.data
            });
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
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
                <p className="about-library">A small digital image or icon used to express an idea or emotion in electronic communication.</p>
                <div className="wrap-emojis" style={{textAlign: 'center', position: 'relative', top: '1em'}}>
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
                        this.state.data.map((emoji, index) => {
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
                            }))
                        )
                }
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