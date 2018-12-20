import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

import CreateCard from './CreateCard.js'

import '../styles/AuthenLogin.css'
import '../styles/Home.css'
import '../styles/User.css'
import upload from '../images/upload.svg'
import * as routes from '../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class CardUpload extends Component {
  state = {
    src: null,
    imageSelected: false,
    crop: {
      aspect: 240/336,
      width: 50,
      x: 0,
      y: 0,
    },
    title: '',
    description: '',
    link: '',
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );
      reader.readAsDataURL(e.target.files[0]);

      this.setState({ imageSelected: true })
    }
  };

  onDeselectFile = e => {
    e.target.src = null
    this.setState({ imageSelected: false })
    this.setState({ theBlob: null})
  }

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;

    // Make the library regenerate aspect crops if loading new images.
    const { crop } = this.state;

    if (crop.aspect && crop.height && crop.width) {
      this.setState({
        crop: { ...crop, height: null },
      });
    } else {
      this.makeClientCrop(crop, pixelCrop);
    }
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  onClickSubmit = (event) => {

      const cardFile = new FormData()
      cardFile.set('title', this.state.title);
      cardFile.set('description', this.state.description);
      cardFile.set('link', this.state.link);
      cardFile.append('picture', this.state.theBlob, this.state.theBlob.name)

      const bearer = 'Bearer ' + localStorage.getItem("accessToken")

      var header = {
          "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
          "Content-Type": `multipart/form-data; boundary=${cardFile._boundary}`,
          "Authorization": bearer
      }
  
      axios.post('http://127.0.0.1:5000/cards', cardFile, { headers: header })
      .then(res => {
        console.log("Successful changed profile picture.")
        console.log(res)
        window.location.reload()
      })
      .catch(function (error) {
        console.log("Failed changing profile picture.")
        console.log(error.response);
      });

      event.preventDefault();
  }

  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        pixelCrop,
        'newFile.jpeg',
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);

        this.setState({ theBlob: blob })

      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    const {
      title,
      description ,
      link,
    } = this.state;

    const isInvalid =
      title === '' ||
      description === '';

      let imagePicker;

      this.state.imageSelected ? (
        imagePicker = 
          <div>
            <form onSubmit={this.onDeselectFile}>
              <button className="m-lm-button rounded" type="submit">Clear Image</button>
            </form>
            
            {src && (
              <ReactCrop
                src={src}
                crop={crop}
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            )}
          </div>
      ) : (
        imagePicker =
          <div class="m-lm-image-upload">
            <label for="file-input">
              <img src={upload} alt="Deckslash-logo" />
            </label>
  
            <input id="file-input" type="file" onChange={this.onSelectFile}/>
          </div>
      )

    return (
      <div className="App">

        <div className="m-lm-content rounded">
          <h3 className="m-lm-header-text">New Book Review</h3>
          <h4 className="m-lm-sub-text">What did you read?</h4>
          
          {imagePicker}

          <form onSubmit={this.onClickSubmit}>

            <input
              className="mr-sm-2 m-lm-input rounded"
              value={title}
              onChange={event => this.setState(updateByPropertyName('title', event.target.value))}
              type="text"
              placeholder="Title"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={description}
              onChange={event => this.setState(updateByPropertyName('description', event.target.value))}
              type="text"
              placeholder="Description"
            />
            <input
              className="mr-sm-2 m-lm-input rounded"
              value={link}
              onChange={event => this.setState(updateByPropertyName('link', event.target.value))}
              type="text"
              placeholder="Link"
            />

            <button className="mr-sm-2 m-lm-button rounded" disabled={isInvalid} type="submit">
              Create Card
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CardUpload;
