import React, { Component } from "react";
import Score from "./components/score";
import "./App.css";
import Nww from "./nww";
class App extends Component {
  state = {
    text: Array(9).fill(null),
    player: null,
    winner: null,
  };

  render() {
    return (
      <div>
<Nww />
        <Score />
      </div>
    );
  }
}

export default App;
