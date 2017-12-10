import React, { Component } from 'react';
const FileSaver = require('file-saver');
import compressImage from '@xkeshi/image-compressor';

class ImageCompressor extends Component {
    constructor(props) {
        super(props);
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
                    <p className="about-library">It is a simple Javascript image compressor which takes help of the Browser's native <code>canvas.toBlob</code> API to compress the images without disturbing the quality.</p>

                    <div className='wrap-input' style={{textAlign: 'center'}}>
                        <label className='containFile'>
                            Choose an image
                            <input onChange={event => this.setImage(event)} type="file" id="file" accept="image/*" />
                        </label>
                    </div>
                </section>
            </div>
        );
    }
}

export default ImageCompressor;