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

    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }

  onPlayerAdd(name) {
    let members = this.state.members
    members.push({id: members.length + 1, name: name, score: 10})
    this.setState({
      members: members
    })
  }

  render() {
    const styling = {
      padding: 60
    }


    return (
      <div style={styling}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members}/>
        <AddPlayer onAdd={this.onPlayerAdd}/>
      </div>
    )
  }
}

export default Leaderboard
