import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/Home.css';
import '../../styles/User.css';
import '../../styles/AuthenLogin.css';

import githubB from '../../images/m-github.svg'

class Footer extends Component {

  render() {
    return (
        <div className="m-menu-footer">
          <div className="row col-12 justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-8 col-xs-*" style={{marginLeft: '25px', marginRight: '-5px'}}>
              <a style={{marginRight: '20px'}}>
                <t className="m-menu-footer-text">
                  © 2019 Duomigo
                </t>
              </a>

              <a href="https://github.com/duomigo" style={{float: 'right'}}>
                <img src={githubB} width="25" height="25" alt="Profile"/>
              </a>

              <a href="mailto:mojitobooks@gmail.com" className="m-menu-footer-contact">
                Say Hello
              </a>
            </div>
          </div>
        </div>
    )
  }
}

export default Footer;