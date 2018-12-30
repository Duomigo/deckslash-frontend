import axios from 'axios';
import React from 'react';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

const isAuth = () => {
    const token = localStorage.getItem('accessToken');
    if (token == null) {
        console.log("There is no token in localStorage")
        return false;
    } else {
        console.log("Token in localStorage is " + token);
        return true;
    }
}


export function refreshUser() {

    const refreshBearer = 'Bearer ' + localStorage.getItem("refreshToken")

    const refreshHeader = {
        "Access-Control-Allow-Origin": 'content-type',
        "Authorization": refreshBearer
    }

    if (localStorage.getItem("refreshToken")) {
        axios.get('http://127.0.0.1:5000/refresh', { headers: refreshHeader})
        .then(res => {
        const newAccessToken = res.data.access_token;
      
        if (newAccessToken) {
            localStorage.removeItem('accessToken')
            localStorage.setItem('accessToken', newAccessToken);
        }
      
        console.log("Update Access Token Successful.");
        console.log(newAccessToken)
        })
        .catch(function (error) {
            console.log(error);
            console.log("Update Access Token Unsuccessful.");
        });     
    }
}

export const goToCard = (id) => {
    console.log(id);
    window.location.href = '/p/' + id;
}

export const ErrorLists = (props) =>
    <div className="m-profile-errors">
        {props.errors.map(function (error, i) { // reverse array map function with server data
            return (
                <p>{error}</p>
            )
        })}
    </div>

export default isAuth;
