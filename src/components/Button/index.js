import React from 'react';
import './button.scss';

class Button extends React.Component {
    
    sendData = () => {
        this.props.click(this.props.theme.slug);
    }

    render() {
        return(
            <button onClick={this.sendData} className={`${this.props.theme.slug}-theme`}> 
                {this.props.theme.name}
            </button>
        )
    }
}

export default Button;