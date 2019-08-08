import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0
    }
  }
  // componentDidUpdate()
  stateUpdater = (value) => {
    this.setState({
      [value]: this.state[value] + 1
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Display />
        <Dashboard stateUpdater={this.stateUpdater} />
      </div>
    );
  }
}

export default App;
