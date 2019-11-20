import React, { Component } from 'react';
import './index.css'
//components
import SideScore from '../src/components/score/SideScore'
import Difficulties from '../src/components/difficulties/Difficulties'
import StartButton from '../src/components/button/StartButton'
import PlayingPanel from '../src/components/playingPanel/PlayingPanel'
import LetterPanel from '../src/components/playingPanel/LetterPanel'

class App extends Component {

  state = {
    miss: 0,
    hit: 0,
    left: 26,
    difficultyLevel: "3500",
    inPlay: false,
    currentNumber: null,
    currentLetter: '',
    playerGuessLetter: '',
    allLetters: [],
    remainingLetters: [],
    correctLetter: [],
    wrongLetter: []

  }

  componentDidMount() {
    this.setState({
      allLetters: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
      remainingLetters: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    })

  }

  getRandomInt = () => {//function for creating random numbers
    const min = 0;
    const max = this.state.remainingLetters.length;

    return Math.floor(Math.random() * (max - min)) + min;
  }

  setDifficulty = (level) => {//function for set game difficulty(speed of changing numbers)
    this.setState({
      difficultyLevel: level
    })
  }

  startGame = () => {//changing game status and starting game loop
    this.setState({
      inPlay: !this.state.inPlay
    })

    this.gameLoop(this.checkResult)

  }

  restartGame = () => {// set all to starting point
    this.setState({
      miss: 0,
      hit: 0,
      left: 26,
      inPlay: false,
      playerGuessLetter: '',
      remainingLetters: [this.state.remainingLetters, ...this.state.allLetters],
      correctLetter: [],
      wrongLetter: []
    })
    
  }

  handleInput = (letter) => {//function for storing input value to game state
    this.setState({
      playerGuessLetter: letter.toUpperCase()
    })
  }

  gameLoop = (callback) => {
    
    const randomInt = this.getRandomInt();
    let remainingLetters = this.state.remainingLetters;
    let currentLetter = remainingLetters[randomInt];
    let currentNumber = (this.state.allLetters).indexOf(currentLetter) + 1;
    remainingLetters.splice(randomInt, 1);
    let level = this.state.difficultyLevel;

    this.setState({
      currentLetter,
      remainingLetters,
      currentNumber
    })

    setTimeout(function () {

      callback()

    }, level)

  }

  checkResult = () => {//checking result for each round

    let letter = this.state.playerGuessLetter;
    let hit = this.state.hit;
    let miss = this.state.miss;
    let left = this.state.left;
    let currLetter = this.state.currentLetter;
    let remainingLetters = this.state.remainingLetters;
    let corrArr = this.state.correctLetter;
    let wrongArr = this.state.wrongLetter;

    //check if there is match
    if (letter == currLetter) {
      corrArr.push(currLetter)
      this.setState({
        hit: hit + 1,
        left: left - 1,
        playerGuessLetter: '',
        correctLetter: corrArr
      })
    } else {
      wrongArr.push(currLetter)
      this.setState({
        miss: miss + 1,
        left: left - 1,
        playerGuessLetter: '',
        wrongLetter: wrongArr
      })
    }

    // check if there are more rounds
    if (remainingLetters.length > 0 && this.state.inPlay) {
      this.gameLoop(this.checkResult)
    } else {
      this.restartGame()
    }


  }
  render() {

    return (

      <div className="App">
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
          inPlay={this.state.inPlay}
          currNum={this.state.currentNumber}
          handleInput={this.handleInput}
          inputValue={this.state.playerGuessLetter}
        />
        <LetterPanel
          letters={this.state.allLetters}
          correctLetter = {this.state.correctLetter}
          wrongLetter = {this.state.wrongLetter}
        />
      </div>


    );
  }
}

export default App;
