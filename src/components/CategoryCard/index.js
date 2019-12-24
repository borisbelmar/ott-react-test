import React from 'react';
import './style.scss';

export default function CategoryCard(props) {
    return (
        <div className="CategoryCard" style={{backgroundImage: `url('${props.category.img}')`}}>
            <h3>{props.category.name}</h3>
        </div>
    )
}