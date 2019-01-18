import axios from 'axios';
import React from 'react';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import warningB from '../../images/m-warning.svg'

const isAuth = () => {
    const token = localStorage.getItem('accessToken');
    if (token == null) {
        return false;
    } else {
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

        })
        .catch(function (error) {
            
        });
    }
}

export const goToCard = (id) => {
    window.location.href = '/p/' + id;
}

export const NotificationLists = (props) =>

    (typeof(props.noti) == 'string') ? (
        <div className="App">
            <p>{props.noti}</p>
        </div>
    ) : (
        <div className="m-profile-error-box rounded row">
            <div>
                <img src={warningB} height='35' width='35' />
            </div>
            <div>
                {props.noti.map(function (error, i) {
                    return (
                        <div>
                            <p className="m-profile-error">{error}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

export default isAuth;
