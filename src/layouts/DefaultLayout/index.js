import React from 'react';
import NavBar from '../../components/NavBar';

export default function DefaultLayout(props) {
    return (
        <div className="mediastream-theme">
            <NavBar />
            {props.children}
        </div>
    )
}