import React, { Component } from 'react';
import SelectPlayer from "./components/SelectPlayer";
import './App.css';
class App extends Component {
  state = {
    text: Array(9).fill(null),
    player: null,

  }
  handleClick = (index) => {
    if (this.state.player !== null) {
      let newText = this.state.text
      if (newText[index] === null) {
        newText[index] = this.state.player
        let newPlayer = this.state.player === "X" ? "O" : "X"
        this.setState({
          text: newText,
          player: newPlayer
        })

      }
    }

  }
  SelectPlayer(selectedPlayer){
    this.setState({
      player: selectedPlayer
    })
  }

  render() {
    const Box = this.state.text.map((box, index) => {
      return (
        <div onClick={() => { this.handleClick(index) }} key={index} className="box">{box}</div>
      )
    })
    let startPlay = this.state.player ? "" :  <SelectPlayer  player = {(selectedPlayer) =>{this.SelectPlayer(selectedPlayer)}}/>


    return (
      <div className="container">
        <h1>Tik Tak Toe Game</h1>
        {startPlay}
        <div className="box-area">
          {Box}
        </div>
      </div>

    )
  }
}

export default App;
