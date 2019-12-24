import React from 'react';
import './style.scss';
import ThemeButton from '../../components/ThemeButton';

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
                        return <ThemeButton key={index} theme={theme} click={this.sendData}/>
                    })
                }
            </div>
        )
    }
}

export default ThemePicker;