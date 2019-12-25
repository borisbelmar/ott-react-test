import React from 'react';
import './style.scss';

export default function NavBar() {
    return (
        <nav className="NavBar clearfix">
            <div className="menu">
                <img src="/assets/img/bars.svg" alt="Menu"/>
            </div>
            <div className="logo">
                <img src="/assets/img/logo.svg" alt="OTTNEXT Logo" />
            </div>
            <div className="search">
                <form>
                    <input type="text" placeholder="Buscar..." />
                </form>
            </div>
        </nav>
    )
}