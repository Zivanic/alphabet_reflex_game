import React, { Component } from 'react';

//components
import SideScore from '../src/components/score/SideScore'
import Difficulties from '../src/components/difficulties/Difficulties'
import StartButton from '../src/components/button/StartButton'
import PlayingPanel from '../src/components/playingPanel/PlayingPanel'

class App extends Component {

  state = {
    miss: 0,
    hit: 0,
    left: 29,
    difficultyLevel: "3500",
    inPlay: false,
    currentNumber:null,
    currentLetter:'',
    playerGuessLetter:''

  }

  setDifficulty = (level) => {
    this.setState({
      difficultyLevel: level
    })
  }

  startGame = () => {
    this.setState({
      inPlay: !this.state.inPlay
    })
    ///....

  }
  restartGame = () => {
    this.setState({
      inPlay: !this.state.inPlay,
      playerGuessLetter: ''
    })
    //.....
  }

  handleInput = (letter) => {
    this.setState({
      playerGuessLetter: letter
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
        <StartButton
          startGame={this.startGame}
          restartGame={this.restartGame}
          inPlay={this.state.inPlay}
        />
        <PlayingPanel
          currNum={this.state.currentNumber}
          handleInput={this.handleInput}
          inputValue={this.state.playerGuessLetter}
        />
      </div>


    );
  }
}

export default App;
