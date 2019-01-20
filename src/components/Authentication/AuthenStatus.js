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
        axios.get('https://mojitobooks.pythonanywhere.com/refresh', { headers: refreshHeader})
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

export const convertDate = (dateStr) => {
    const year = dateStr.substring(0,4)
    const date = dateStr.substring(8,10)
    const month = dateStr.substring(5,7)

    let monthStr;

    switch (month) {
        case '01':
          monthStr = "Jan";
          break;
        case '02':
          monthStr = "Feb";
          break;
        case '03':
          monthStr = "Mar";
          break;
        case '04':
          monthStr = "Apr";
          break;
        case '05':
          monthStr = "May";
          break;
        case '06':
          monthStr = "Jun";
          break;
        case '07':
          monthStr = "Jul";
          break;
        case '08':
          monthStr = "Aug";
          break;
        case '09':
          monthStr = "Sep";
          break;
        case '10':
          monthStr = "Oct";
          break;
        case '11':
          monthStr = "Nov";
          break;
        case '12':
          monthStr = "Dec";
          break;
      }

      const dateFormat = monthStr + ' ' + date + ', ' + year
      return dateFormat
}

export const convertJoinDate = (dateStr) => {
    const year = dateStr.substring(0,4)
    const date = dateStr.substring(8,10)
    const month = dateStr.substring(5,7)

    let monthStr;

    switch (month) {
        case '01':
          monthStr = "January";
          break;
        case '02':
          monthStr = "February";
          break;
        case '03':
          monthStr = "March";
          break;
        case '04':
          monthStr = "April";
          break;
        case '05':
          monthStr = "May";
          break;
        case '06':
          monthStr = "June";
          break;
        case '07':
          monthStr = "July";
          break;
        case '08':
          monthStr = "August";
          break;
        case '09':
          monthStr = "September";
          break;
        case '10':
          monthStr = "October";
          break;
        case '11':
          monthStr = "November";
          break;
        case '12':
          monthStr = "December";
          break;
      }

      const dateFormat = monthStr + ' ' + year
      return dateFormat
}

export const goToCard = (id) => {
    window.location.href = '/p/' + id;
}

export const goToUser = (username) => {
    window.location.href = '/u/' + username;
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
