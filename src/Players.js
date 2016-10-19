import React from 'react'

import Player from './Player.js'

class Players extends React.Component {
  render() {
    return (
      <div>
      {this.props.members.map( (player, index) => {
        return <Player name={player.name} score={player.score} />
      } )}
      </div>
    )
  }
}

export default Players
