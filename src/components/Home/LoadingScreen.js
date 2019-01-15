import React, { Component } from 'react';
import '../../styles/Home.css'

import loadingB from '../../images/m-loading.svg'

class LoadingScreen extends Component {
    render() {
        return(
            <div className="m-home-error-page">
                <img src={loadingB} className="m-profile-loading-logo" width='75' height='75' />
            </div>
        )
    }
}

export default LoadingScreen;