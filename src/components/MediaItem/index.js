import React from 'react';
import MediaItemDefault from './Default';
import MediaItemMinimal from './Minimal';

export default function MediaItemFactory(props) {
    switch (props.variation) {
        case 'minimal':
            return <MediaItemMinimal media={props.media} noPlay={props.noPlay} />
        default:
            return <MediaItemDefault media={props.media} noPlay={props.noPlay} />
    }
}