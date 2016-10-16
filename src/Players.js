import React, {Component} from 'react'

import Player from './Player.js'

class Players extends Component {
  render() {


    return (
      <div className="players">
        <Player name="Jose Valim" score={319} />
        <Player name="Zed Shaw" score={110} />
        <Player name="Guido van Rossum" score={410} />
      </div>
    )
  }
}

export default Players
