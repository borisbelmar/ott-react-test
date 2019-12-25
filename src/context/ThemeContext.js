import React from 'react';

export const ThemeContext = React.createContext();

export class ThemeContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: 'mediastream',
        }
    }

    onReceivedData = data => {
        console.log(data);
        this.setState({selectedTheme: data})
    }


    render() {
        return (
            <div className={`${this.state.selectedTheme}-theme`}>
                <ThemeContext.Provider
                    value={{
                        selectedTheme: this.state.selectedTheme,
                        onReceivedData: this.onReceivedData
                    }}
                >
                    
                        {this.props.children}
                </ThemeContext.Provider>
            </div>
        )
    }
}