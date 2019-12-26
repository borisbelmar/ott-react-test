import React from 'react';
import './style.scss';
import MediaItem from '../../components/MediaItem';

export default function MediaList(props) {
    return (
        <section className="section container">
            <div className="section-title">
                <h2>{props.title}</h2>
            </div>
            <div className="MediaList">
                {props.medias.map( media => {
                    return (
                        <MediaItem key={media.id} media={media} noPlay={props.noPlay}/>
                    )
                })}
            </div>
        </section>
    )
}