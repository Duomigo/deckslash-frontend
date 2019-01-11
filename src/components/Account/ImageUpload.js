import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'
import upload from '../../images/upload.svg'
import * as routes from '../../constants/routes';

class ImageUpload extends Component {
  state = {
    src: null,
    imageSelected: false,
    crop: {
      aspect: 1,
      width: 50,
      x: 0,
      y: 0,
    },
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

      const imgFile = new FormData()
      imgFile.append("picture", this.state.theBlob, this.state.theBlob.name)

      const bearer = 'Bearer ' + localStorage.getItem("accessToken")

      var header = {
          "Access-Control-Allow-Origin": 'X-Requested-With,content-type',
          "Content-Type": `multipart/form-data; boundary=${imgFile._boundary}`,
          "Authorization": bearer
      }
  
      axios.post('http://40.83.75.170:5000/profilepic', imgFile, { headers: header })
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

    canvas.width = 512;
    canvas.height = 512;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      512,
      512,
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
    const { crop, src } = this.state;

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
        <h3 className="m-lm-header-text">Change your profile picture.</h3>
        <h4 className="m-lm-sub-text">Show us your newest look!</h4>

        {imagePicker}

        <form onSubmit={this.onClickSubmit}>
          <button className="m-lm-button rounded" type="submit">Update Profile Image</button>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
