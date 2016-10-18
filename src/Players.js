import React, {Component} from 'react'

import Player from './Player.js'

class Players extends Component {
  onScoreChange(index, number) {
    
  console.log("onScoreChange", index, number)
  }
  render() {

    return (
      <div className="players">
      {
        this.props.players.map( (player, index) => {
          return <Player name={player.name} score={player.score} key={index} onScoreChange={function (number) {this.onScoreChange(index, number)}.bind(this)} />
        } )
      }
      </div>
    )
  }
}

export default Players
