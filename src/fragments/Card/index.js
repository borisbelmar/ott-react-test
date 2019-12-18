import React from 'react';
import './style.scss';
import Rating from '../../components/Rating';

function Card(props) {
    return (
        <div className={`card ${props.theme ? props.theme : ''}`}>
            <div className="card-image" style={{backgroundImage: `url('${props.content.img}')`}}>
                {props.content.featured ? <div className="card-featured">Nuevo</div> : null}
                <div className="card-time">{props.content.duration}</div>
                <div className="card-play"></div>
                <div className="card-like"></div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{props.content.name}</h3>
                <p className="card-description">{props.content.description}</p>
                <div className="card-meta">
                    <Rating rating={props.content.rating}/>
                    <div className="date">{props.content.date}</div>
                </div>
            </div>
        </div>
    )
}
    

export default Card;