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
  stateUpdater = (value) => {
    if(value === 'foul') {
      if(this.state.strike < 2) {
        this.setState({
          strike: this.state.strike + 1
        })
      }
    }
    if(value === 'strike') {
      if(this.state.strike < 2) {
        this.setState({
          strike: this.state.strike + 1
        })
      } else {
        this.setState({
          strike: 0,
          ball: 0
        })
      }
    }
    if(value === 'ball') {
      if(this.state.ball < 3) {
        this.setState({
          ball: this.state.ball + 1
        })
      } else {
        this.setState({
          strike: 0,
          ball: 0
        })
      }
    }
    if(value === 'hit') {
      this.setState({
        strike: 0,
        ball: 0,
        hit: this.state.hit + 1
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Display stateValues={this.state} />
        <Dashboard stateUpdater={this.stateUpdater} />
      </div>
    );
  }
}

export default App;
