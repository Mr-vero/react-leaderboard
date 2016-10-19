import React from 'react'

import Players from './Players.js'

const PLAYERS = [
  {id: 1, name: "Jose Valim", score: 30},
  {id: 2, name: "Guido van Rossum", score: 35},
  {id: 3, name: "Grace Hopper", score: 44}
]

class Leaderboard extends React.Component {
  render() {

    return (
      <div>
        <h1>Leaderboard</h1>
        <Players members={PLAYERS}/>
      </div>
    )
  }
}

export default Leaderboard
