import React, {Component} from 'react'

import Player from './Player.js'

class Players extends Component {
  render() {

    return (
      <div className="players">
      {
        this.props.players.map( (player, index) => {
          return <Player name={player.name} score={player.score} key={index} />
        } )
      }
      </div>
    )
  }
}

export default Players
