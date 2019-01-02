import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import thumbnailupload from '../../images/thumbnailupload.svg'
import publish from '../../images/publish.svg'
import * as routes from '../../constants/routes';
import { NotificationLists } from '../Authentication/AuthenStatus';

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
    theBlob: null,
    notification: null
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

      if (this.state.theBlob != null) {
        cardFile.append('picture', this.state.theBlob, this.state.theBlob.name)
      }

      const bearer = 'Bearer ' + localStorage.getItem("accessToken")

      var header = {
          "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
          "Content-Type": `multipart/form-data; boundary=${cardFile._boundary}`,
          "Authorization": bearer
      }
  
      axios.post('http://127.0.0.1:5000/post', cardFile, { headers: header })
      .then(res => {
        window.location.href = '/profile'
      })
      .catch(err => {
        this.setState({ notification: err.response.data.msg})
        if (this.state.notification == null) {
          this.setState({ notification: err.response.data[0].msg })
        }
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
    
    canvas.width = 480;
    canvas.height = 672;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      480,
      672,
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
    const { crop, croppedImageUrl, src, notification } = this.state;

    const {
      title,
      description
    } = this.state;

    const isInvalid =
      title === '' ||
      description === '';

      let imagePicker;

      this.state.imageSelected ? (
        imagePicker = 
          <div>
            
            {src && (
              <ReactCrop
                src={src}
                crop={crop}
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            )}

            <form onSubmit={this.onDeselectFile}>
              <button className="m-lm-button rounded" type="submit">Clear Image</button>
            </form>

          </div>
      ) : (
        imagePicker =
          <div class="m-lm-image-upload">
            <label for="file-input">
              <img src={thumbnailupload} alt="Deckslash-logo" />
            </label>
  
            <input id="file-input" type="file" onChange={this.onSelectFile}/>
          </div>
      )

    return (
      <div className="container">

          <div className="m-lm-card-upload-container">
            <a className="m-lm-title-create-card">New Review</a>
            <a onClick={this.onClickSubmit}>
              <button className="mr-sm-2 m-lm-create-card-button rounded float-right">
                Submit Post
              </button>
            </a>
          </div>

          <div className="" style={{marginTop: '-20px', marginBottom: '20px', marginLeft: '20px'}}>
            {notification && <NotificationLists noti={notification} />}
          </div>

          <div className="row m-row-center">
            <div className="col-lg-4 col-md-12 m-row-center">
              <div>
                {imagePicker}
              </div>
            </div>

            <div className="col-lg-8 col-md-*">
              <form onSubmit={this.onClickSubmit}>
                <input
                  className="m-lm-ghost-input-title"
                  value={title}
                  onChange={event => this.setState(updateByPropertyName('title', event.target.value))}
                  type="text"
                  placeholder="Add A Title"
                />
                <textarea
                  className="m-lm-ghost-input"
                  value={description}
                  onChange={event => this.setState(updateByPropertyName('description', event.target.value))}
                  type="text"
                  placeholder="Say more about this book ..."
                />
                {/* <button className="mr-sm-2 m-lm-create-card-button rounded" disabled={isInvalid} type="submit">
                  Submit Post
                </button> */}
              </form>
            </div>

          </div>

        </div>
    );
  }
}

export default CardUpload;
