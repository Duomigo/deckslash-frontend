import React, { Component } from 'react';
import '../../styles/Home.css'

import cycloneB from '../../images/m-cyclone.png'

class LoadingScreen extends Component {
    render() {
        return(
            <div className="m-home-error-page">
                <img src={cycloneB} className="m-profile-loading-logo" width='75' height='75' />
            </div>
        )
    }
}

export default LoadingScreen;