import React from 'react';
import NavBar from '../../components/NavBar';
import './style.scss';

export default function DefaultLayout(props) {
    return (
        <div className="DefaultLayout">
            <NavBar />
            {props.children}
        </div>
    )
}