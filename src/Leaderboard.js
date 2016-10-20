import React from 'react'

import Players from './Players.js'
import AddPlayer from './AddPlayer.js'

const PLAYERS = [
  {id: 1, name: "Jose Valim", score: 30},
  {id: 2, name: "Guido van Rossum", score: 35},
  {id: 3, name: "Grace Hopper", score: 44}
]

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      members: PLAYERS
    }
  }

  render() {
    const styling = {
      padding: 60
    }


    return (
      <div style={styling}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members}/>
        <AddPlayer />
      </div>
    )
  }
}

export default Leaderboard
