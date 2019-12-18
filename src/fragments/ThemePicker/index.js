import React from 'react';
import './style.scss';
import Badge from '../../components/Badge';

class ThemePicker extends React.Component {

    sendData = (data) => {
        this.props.receivedData(data);
    }

    render() { 
        return (
            <div className="ThemePicker">
                <h2>Tema actual</h2>
                <input type="text" value={this.props.selected} readOnly/>
                {this.props.themes.map(
                    (theme, index) => {
                        return <Badge key={index} theme={theme} click={this.sendData}/>
                    })
                }
            </div>
        )
    }
}

export default ThemePicker;