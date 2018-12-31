import React, { Component } from 'react';
import '../../styles/Home.css'

class ErrorPage extends Component {
    render() {
        return(
            <div className="m-home-error-page">
                <p1>404</p1>
                <p3>Page doesn't exist.</p3>
            </div>
        )
    }
}

export default ErrorPage;