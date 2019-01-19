import React, { Component } from 'react';
import '../../styles/Home.css'

import { Emoji } from 'emoji-mart';

class ErrorPage extends Component {
    render() {
        return(
            <div className="m-home-error-page">
                <div className="m-home-error-text">
                    Sorry.
                    <a className="m-lm-emoji-tag" style={{position: 'relative', top: '3px'}}>
                        <Emoji 
                            set="twitter" 
                            emoji="confused"
                            size={25}
                            onClick={(emoji, event) => {
                                window.location.href = '/t/' + emoji.id
                            }}
                        />  
                    </a>
                </div>
                <div className="m-lm-emoji-tag" >
                    <Emoji 
                        set="twitter" 
                        emoji="cow"
                        size={40}
                        onClick={(emoji, event) => {
                            window.location.href = '/t/' + emoji.id
                        }}
                    />
                </div>
                <div className="m-home-error-text">
                    Page doesn't exist.
                    <a className="m-lm-emoji-tag"  style={{position: 'relative', top: '3px'}}>
                        <Emoji 
                            set="twitter" 
                            emoji="chipmunk"
                            size={25}
                            onClick={(emoji, event) => {
                                window.location.href = '/t/' + emoji.id
                            }}
                        />  
                    </a>
                </div>
            </div>
        )
    }
}

export default ErrorPage;