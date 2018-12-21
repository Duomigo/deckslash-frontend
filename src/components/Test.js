import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

import '../styles/Form.css'
import upload from '../images/upload.svg'
import * as routes from '../constants/routes';

class Test extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" className="m-lm-ghost-input-title" placeholder="Title" required /> 
                    <input type="text" className="m-lm-ghost-input" placeholder="Description" required />
                    <textarea rows="5" type="text" className="m-lm-ghost-input" placeholder="Review your experience ..." required></textarea>
                </form>
            </div>
        );
    }
}

export default Test;