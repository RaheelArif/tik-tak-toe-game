import React, { Component } from 'react';
import SelectPlayer from "./SelectPlayer";


export default class PlayerInfo extends Component {
    

    handleSelectPlayer(selectedPlayer){
       this.props.SelectPlayer(selectedPlayer)
    }
render(){
    let startPlay = this.props.player ? (        
         <h2>Mr {this.props.player} Play Fast Sir!</h2>        
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