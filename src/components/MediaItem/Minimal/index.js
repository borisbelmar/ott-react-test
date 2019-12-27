import React from 'react';
import './style.scss';

function MediaItem(props) {
    return (
        <div className={`MediaItem-minimal ${props.theme ? props.theme : ''}`}>
            <div className="MediaItem-minimal-image" style={{backgroundImage: `url('${props.media.img}')`}}>
                {props.media.featured ? <div className="MediaItem-minimal-featured">Nuevo</div> : null}
                <div className="MediaItem-minimal-time">{props.media.duration}</div>
                {props.noPlay ? null : <div className="MediaItem-minimal-play"></div>}
                <div className="MediaItem-minimal-content">
                    <h3 className="MediaItem-minimal-title">{props.media.name}</h3>
                </div>
            </div>
        </div>
    )
}
    

export default MediaItem;