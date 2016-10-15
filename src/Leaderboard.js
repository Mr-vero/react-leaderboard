import React from 'react'

import Header from './Header.js'
import Players from './Players.js'

class Leaderboard extends React.Component {
  render () {

    return (
      <div className="application">
        <Header />
        <Players />
      </div>
    )
  }
}

export default Leaderboard
