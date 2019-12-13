import React from 'react';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          theme: 'mediastream'
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
          theme: event.target.value
      });
  }

  render() {
    return (
      <div className="App">
        <div className={`container ${this.state.theme}-theme`}>
          <h2>Tema actual</h2>
          <input type="text" value={this.state.theme} onChange={this.handleChange}/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;
