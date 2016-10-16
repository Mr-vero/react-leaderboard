import React, {Component} from 'react'

import Player from './Player.js'

class Players extends Component {
  render() {


    return (
      <div className="players">
        <Player />
        <Player />
        <Player />
      </div>
    )
  }
}

export default Players
