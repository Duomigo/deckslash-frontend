import React, { Component } from 'react';
import '../../styles/Home.css'

import errorB from '../../images/m-error.svg'
import rainB from '../../images/m-rain.svg'

class ErrorPage extends Component {
    render() {
        return(
            <div className="m-home-error-page">
                <h1 className="m-home-error-text">Sorry :(</h1>
                <img src={rainB} width='100' height='100' />
                <h1 className="m-home-error-text">Page doesn't exist.</h1>
            </div>
        )
    }
}

export default ErrorPage;