import React from 'react';
import './style.scss';

function Rating(props) {
    const filledStar = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="star"><polygon  points="7.5 11.7 12 14.5 10.8 9.3 14.9 5.8 9.6 5.4 7.5 0.5 5.4 5.4 0.2 5.8 4.2 9.3 3 14.5 7.5 11.7"/></svg>;
    const unfilledStar = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="star"><path d="M7.5 10.37L4.74 12l.73-3.14L3 6.77l3.22-.28 1.25-3 1.26 3 3.27.29L9.54 8.9l.73 3.1zm7.35-4.53l-5.28-.46L7.5.52 5.43 5.39l-5.28.45 4 3.48L3 14.48l4.5-2.74 4.5 2.74-1.2-5.16z"></path></svg>;
    
    const ratingArray = [];

    for (let i = 1; i <= 5; i++) {
        if(i <= props.rating) {
            ratingArray.push(filledStar);
        } else {
            ratingArray.push(unfilledStar);
        }
        
    }

    return (
        <div className="rating">
            {ratingArray.map((item, key) => {
                return item
            })}
        </div>
    )
};

export default Rating;