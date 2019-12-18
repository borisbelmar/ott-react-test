import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function NotFound() {
    return (
        <div className="container">
            <h1 className="title">Error 404: Not Found</h1>
            <Link to="/" className="link">Volver al home</Link>
        </div>
    );
}

export default NotFound;