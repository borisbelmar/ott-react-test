import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import './app.scss';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTheme: 'mediastream',
          themes: [
            {
              name: 'Mediastream',
              slug: 'mediastream'
            },
            {
              name: 'Ice Green',
              slug: 'ice-green'
            },
            {
              name: 'Lava',
              slug: 'lava'
            },
            {
              name: 'Lavender',
              slug: 'lavender'
            },
            {
              name: 'Dust',
              slug: 'dust'
            },
            {
              name: 'Dark Mediastream',
              slug: 'dark-mediastream'
            }
          ]
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
        selectedTheme: event.target.value
      });
  }

  onClick = (data) => {
    this.setState({
      selectedTheme: data
    });
  }

  render() {
    return (
      <div className={`${this.state.selectedTheme}-theme`}>
        <div className="main">
          <div className="container">
            <h2>Tema actual</h2>
            <input type="text" value={this.state.selectedTheme} onChange={this.handleChange} readOnly/>
            {this.state.themes.map(
              (theme, index) => {
                return <Button key={index} theme={theme} click={this.onClick}/>
              })
            }
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
