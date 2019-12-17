import React from 'react';
import './button.scss';

class Button extends React.Component {
    
    sendData = () => {
        this.props.click(this.props.theme.slug);
    }

    render() {
        return(
            <button onClick={this.sendData}> 
                {this.props.theme.name}
            </button>
        )
    }
}

export default Button;