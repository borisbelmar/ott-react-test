import React from 'react';
import './style.scss';
import ThemePicker from '../../fragments/ThemePicker';
import controller from './controller';
import MediaItem from '../../fragments/MediaItem'

class ThemeTest extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: 'mediastream',
            series: [],
            themes: [],
            scopedThemes: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
  
    async componentDidMount() {
      this.setState({series: await controller.getSeries()});
      this.setState({themes: await controller.getThemes()});
      this.state.series.map(
        (serie) => {
          return this.state.scopedThemes.push('');
        }
      );
    }
  
    handleChange(index, e) {
        this.setState(
          {
            scopedThemes: {
              ...this.state.scopedThemes,
              [index] : `${e.target.value}` 
            }
          }
        );
    }

    onReceivedData = (data) => {
      this.setState({
        selectedTheme: data
      });
    }
  
    render() {
        return (
            <div className={`${this.state.selectedTheme}-theme`}>
                <div className="main">
                    <div className="container">
                      <ThemePicker selected={this.state.selectedTheme} themes={this.state.themes} receivedData={this.onReceivedData}/>
                      {this.state.series.map(
                          (serie, index) => {
                            return (
                                <div key={index} className="test">
                                  <input type="text" value={this.state.scopedThemes[index]} onChange={(e) => this.handleChange(index, e)} placeholder="Ingresa un tema para aplicarlo localmente" />
                                  <MediaItem 
                                    content={serie} 
                                    theme={`${this.state.scopedThemes[index]}-theme-scoped`} 
                                    noplay
                                  />
                                </div>
                              )
                          })
                      }
                    </div>
                </div>
            </div>
        );
    }
}

export default ThemeTest;