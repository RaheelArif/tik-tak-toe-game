import React, { Component } from 'react';

export default class SelectPlayer extends Component {

    selectplayer (e)  {
        e.preventDefault()
        this.props.player(e.target.player.value)
    }
    render() {

        return (

            <div>
                <form onSubmit={(e) => this.selectplayer(e)} >

                    <label  >Play with "X"
                    <input className="radio" type="radio" value="X" name="player"  />
                    </label>
                    <label>Play with "O"
                    <input className="radio" type="radio" id="O" name="player" value="O" />
                    <input className="submit" type="submit" value="Start" />

                    </label>

                </form>

            </div>
        )
    }
}