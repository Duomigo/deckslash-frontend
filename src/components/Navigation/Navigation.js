import React, { Component } from 'react';
import isAuth from '../AuthenStatus';
import GuestNavbar from './GuestNavbar';
import UserNavbar from './UserNavbar';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = { status: isAuth() };
    };

    render() {
        let navigation;

        isAuth() ? (
            navigation = <UserNavbar />
        ) : (
            navigation = <GuestNavbar />
        )

        return (
            <div>
                {navigation}
            </div>
        );
    }
}

export default Navigation;