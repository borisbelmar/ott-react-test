import React from 'react';
import './style.scss';

function heartState(isLiked) {
    if(isLiked) {
        return (
            <svg className="heart filled" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9,0.8c-2.3,0-4.4,1-5.9,2.8c-1.4-1.7-3.6-2.8-5.8-2.8C3.2,0.8,0,4,0,8c0,0,0,0.1,0,0.1c0,5,4.4,9.1,11.1,15.3l1.9,1.7l1.9-1.8C21.6,17.2,26,13.1,26,8.1c0.1-4-3.1-7.2-7-7.3C18.9,0.8,18.9,0.8,18.9,0.8z"/>
            </svg>
        )
    } else {
        return (
            <svg className="heart unfilled" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.13,21.46l-.13.13-.13-.13C6.68,15.74,2.6,12,2.6,8.12A4.49,4.49,0,0,1,7.15,3.48a5.08,5.08,0,0,1,4.64,3.13h2.43a5.05,5.05,0,0,1,4.63-3.13A4.49,4.49,0,0,1,23.4,8.12C23.4,12,19.32,15.74,13.13,21.46ZM18.85.82A7.73,7.73,0,0,0,13,3.6,7.73,7.73,0,0,0,7.15.82,7.16,7.16,0,0,0,0,8.12c0,5,4.42,9.11,11.11,15.32L13,25.18l1.88-1.76C21.58,17.23,26,13.14,26,8.12A7.16,7.16,0,0,0,18.85.82Z"/>
            </svg>
        )
    }
}

export default function Like(props) {
    return(
        <div className="Like">
            {heartState(props.liked)}
        </div>
    )
}