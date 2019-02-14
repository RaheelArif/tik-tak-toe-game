import React, { Component } from 'react';
import SelectPlayer from "./SelectPlayer";


export default class PlayerInfo extends Component {
    

    handleSelectPlayer(selectedPlayer){
       this.props.SelectPlayer(selectedPlayer)
    }
render(){
    let startPlay = this.props.player ? (        
         <h2>Play Fast Mr <span> {this.props.player} </span></h2>        
        ) : (
          <SelectPlayer player={(selectedPlayer) => { this.handleSelectPlayer(selectedPlayer) }} />
      );
return(
 <div>
     {startPlay}
 </div>
)
}
}