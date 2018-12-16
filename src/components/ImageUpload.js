import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

class ImageUpload extends Component {
  state = {
    src: null,
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
    }
  };

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
  
      axios.post('http://127.0.0.1:5000/profilepic', imgFile, { headers: header })
      .then(res => {
        console.log("Successful changed profile picture.")
        console.log(imgFile.get("picture"))
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

    return (
      <div className="App">
        <div>
          <input type="file" onChange={this.onSelectFile} />
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        <h1>{croppedImageUrl}</h1>

        <form onSubmit={this.onClickSubmit}>
          <button className="btn navbar-button" type="submit">Push</button>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
