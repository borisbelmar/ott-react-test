import React from 'react';
import './style.scss';
import Rating from '../../components/Rating';
import Like from '../../components/Like';

function MediaItem(props) {
    return (
        <div className={`MediaItem ${props.theme ? props.theme : ''}`}>
            <div className="image" style={{backgroundImage: `url('${props.content.img}')`}}>
                {props.content.featured ? <div className="featured">Nuevo</div> : null}
                <div className="time">{props.content.duration}</div>
                {props.noplay ? null : <div className="play"></div>}
                <Like />
            </div>
            <div className="item-content">
                <h3 className="item-title">{props.content.name}</h3>
                <p className="item-description">{props.content.description}</p>
                <div className="meta">
                    <Rating rating={props.content.rating}/>
                    <div className="date">{props.content.date}</div>
                </div>
            </div>
        </div>
    )
}
    

export default MediaItem;