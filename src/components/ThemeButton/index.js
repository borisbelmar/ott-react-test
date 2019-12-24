import React from 'react';
import './style.scss';

class ThemeButton extends React.Component {
    
    sendData = () => {
        this.props.click(this.props.theme.slug);
    }

    render() {
        return(
            <span className={`${this.props.theme.slug}-theme-scoped`}>
                <button onClick={this.sendData}> 
                    {this.props.theme.name}
                </button>
            </span>
        )
    }
}

export default ThemeButton;