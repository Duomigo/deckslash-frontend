import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../styles/User.css'

class MenuScrollBar extends Component {
    render() {
        return (
        <div className="m-menu-scroll-bar">
            <a href="#home">Featured</a>
            <a href="#news">Books</a>
            <a href="#contact">Business</a>
            <a href="#about">Design</a>
            <a href="#support">Education</a>
            <a href="#blog">Entertainment</a>
            <a href="#tools">Finance</a>  
            <a href="#custom">Health</a>
            <a href="#logo">Humor</a>
            <a href="#friends">Entrepreneurs</a>
          </div>
        );
    }
}

export default MenuScrollBar;