import React from 'react'

import Header from './Header.js'
import Players from './Players.js'

class Leaderboard extends React.Component {
  render () {
    const leaderboardStyle = {
      padding: 60
    }

    return (
      <div className="application" style={leaderboardStyle}>
        <Header title="Top Score" total={this.props.players.length}/>
        <Players players={this.props.players}/>
      </div>
    )
  }
}

export default Leaderboard
