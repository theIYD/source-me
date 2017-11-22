import React, { Component } from 'react';
const FileSaver = require('file-saver');
import compressImage from '@xkeshi/image-compressor';

class ImageCompressor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompress: false
        }
        this.setImage = this.setImage.bind(this);
    }

    setImage(event) {
        const REGEXP_IMAGE_TYPE = /^image\/.+$/;
        const file = event.target.files[0];

        if(!REGEXP_IMAGE_TYPE.test(file.type)) {
            alert('The file must be an image. Please try again.');
        }

        const imageCompressor = new compressImage();
        imageCompressor.compress(file, {
            quality: 0.6
        })
        .then((result) => {
            FileSaver.saveAs(result, result.name);
            this.setState({
                isCompress: true
            });

        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <section className='wrapper'>
                    <h2 style={{textAlign: 'center'}}>Image Compressor</h2>
                    <hr />
                    <p className="about-library">URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page. This is achieved by using a redirect which links to the web page that has a long URL.</p>

                    <div className='wrap-input' style={{textAlign: 'center'}}>
                        <label className='containFile'>
                            Choose an image
                            <input onChange={event => this.setImage(event)} type="file" id="file" accept="image/*" />
                        </label>
                        <p>{(this.state.isCompress) ? 'The compressed image was saved': null}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default ImageCompressor;