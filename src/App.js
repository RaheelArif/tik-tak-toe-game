import React, { Component } from 'react';
import SelectPlayer from "./components/SelectPlayer";
import './App.css';
class App extends Component {
  state = {
    text: Array(9).fill(null),
    player: null,
    winner: null
  }

  checkWinner() {
    let winnerStatus = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ]
    for (let index = 0; index < winnerStatus.length; index++) {
      const [a, b, c] = winnerStatus[index];
      if (this.state.text[a] && this.state.text[a] === this.state.text[b] && this.state.text[a] === this.state.text[c]) {
        alert("winner is " + this.state.player)

        this.setState({
          winner: this.state.player
        })
      }
    }
  }
  handleClick = (index) => {
    if (this.state.player !== null && this.state.winner === null) {
      let newText = this.state.text
      if (newText[index] === null) {
        newText[index] = this.state.player
        let newPlayer = this.state.player === "X" ? "O" : "X"
        this.setState({
          text: newText,
          player: newPlayer
        })
        this.checkWinner()
      }
    }

  }
  SelectPlayer(selectedPlayer) {
    this.setState({
      player: selectedPlayer
    })
  }
  replay(){
    this.setState({
      player : null,
      winner: null,
      text : Array(9).fill(null)
    })
  }

  render() {
    const Box = this.state.text.map((box, index) => {
      return (
        <div onClick={() => { this.handleClick(index) }} key={index} className="box">{box}</div>
      )
    })
   
  let startPlay = this.state.player ? (
    <div>
     <h2>Mr {this.state.player} Play Fast Sir!</h2>
     <button onClick={() => {this.replay()}}>Replay</button>
    </div>
    ) : (
      <SelectPlayer player={(selectedPlayer) => { this.SelectPlayer(selectedPlayer) }} />
  );


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
