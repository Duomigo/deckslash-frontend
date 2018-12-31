import React, { Component } from 'react';
import '../../styles/Home.css'

import loadingB from '../../images/m-loading.svg'

class LoadingScreen extends Component {
    render() {
        return(
            <div className="m-home-error-page">
                <h1 className="m-home-error-text">Please be patient :)</h1>
                <img src={loadingB} className="m-profile-loading-logo" width='200' height='200' />
                <h1 className="m-home-error-text">Loading ...</h1>
            </div>
        )
    }
}

export default LoadingScreen;