import React, { Component } from 'react';

//components
import SideScore from '../src/components/score/SideScore'
import Difficulties from '../src/components/difficulties/Difficulties'

class App extends Component {

  state = {
    miss: 0,
    hit: 0,
    left: 29,
    difficultyLevel: "3500",
    inPlay: false

  }

  setDifficulty = (level) => {
    this.setState({
      difficultyLevel: level
    })
  }

  render() {

    return (

      <div className="App">
        <h1>Start game</h1>
        <SideScore
          miss={this.state.miss}
          hit={this.state.hit}
          left={this.state.left}
        />
        <Difficulties
        setDifficulty={this.setDifficulty}
          currLevel={this.state.difficultyLevel}
          inPlay={this.state.inPlay}
        />
      </div>

    );
  }
}

export default App;
