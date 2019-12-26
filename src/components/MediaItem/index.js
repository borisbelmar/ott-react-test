import React from 'react';
import './style.scss';
import Rating from '../../components/Rating';
import Like from '../../components/Like';

function MediaItem(props) {
    return (
        <div className={`MediaItem ${props.theme ? props.theme : ''}`}>
            <div className="MediaItem-image" style={{backgroundImage: `url('${props.media.img}')`}}>
                {props.media.featured ? <div className="MediaItem-featured">Nuevo</div> : null}
                <div className="MediaItem-time">{props.media.duration}</div>
                {props.noPlay ? null : <div className="MediaItem-play"></div>}
                <Like />
            </div>
            <div className="MediaItem-content">
                <h3 className="MediaItem-title">{props.media.name}</h3>
                <p className="MediaItem-description">{props.media.description}</p>
                <div className="MediaItem-meta">
                    <Rating rating={props.media.rating}/>
                    <div className="date">{props.media.date}</div>
                </div>
            </div>
        </div>
    )
}
    

export default MediaItem;