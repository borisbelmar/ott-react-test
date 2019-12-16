import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-image" style={{backgroundImage: `url(/assets/img/mandalorian.jpeg)`}}>
                    <div className="card-featured">Nuevo</div>
                    <div className="card-time">34:22</div>
                    <div className="card-play"></div>
                    <div className="card-like"></div>
                </div>
                <div className="card-content">
                    <h3 className="card-title">Mandalorian</h3>
                    <p className="card-description">Candy sugar plum sugar plum cake lips text</p>
                    <div className="card-meta">
                        <div className="rating">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 15 15" className="star"><title class="undefined">  star-filled</title><polygon  points="7.5 11.7 12 14.5 10.8 9.3 14.9 5.8 9.6 5.4 7.5 0.5 5.4 5.4 0.2 5.8 4.2 9.3 3 14.5 7.5 11.7"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 15 15" className="star"><title class="undefined">  star-filled</title><polygon  points="7.5 11.7 12 14.5 10.8 9.3 14.9 5.8 9.6 5.4 7.5 0.5 5.4 5.4 0.2 5.8 4.2 9.3 3 14.5 7.5 11.7"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 15 15" className="star"><title class="undefined">  star-filled</title><polygon  points="7.5 11.7 12 14.5 10.8 9.3 14.9 5.8 9.6 5.4 7.5 0.5 5.4 5.4 0.2 5.8 4.2 9.3 3 14.5 7.5 11.7"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 15 15" className="star"><title class="undefined">  star-filled</title><polygon  points="7.5 11.7 12 14.5 10.8 9.3 14.9 5.8 9.6 5.4 7.5 0.5 5.4 5.4 0.2 5.8 4.2 9.3 3 14.5 7.5 11.7"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 15 15" className="star"><title class="undefined">  star-filled</title><polygon  points="7.5 11.7 12 14.5 10.8 9.3 14.9 5.8 9.6 5.4 7.5 0.5 5.4 5.4 0.2 5.8 4.2 9.3 3 14.5 7.5 11.7"/></svg>
                        </div>
                        <div className="date">22/12/2019</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;