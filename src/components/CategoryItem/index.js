import React from 'react';
import './style.scss';

export default function CategoryItem(props) {
    return (
        <div className="CategoryItem" style={{backgroundImage: `url('${props.category.img}')`}}>
            <h3>{props.category.name}</h3>
        </div>
    )
}