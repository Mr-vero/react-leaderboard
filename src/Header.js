import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <Total />
        <Title />
      </div>
    )
  }
}

class Title extends Component {
  render() {
    return (
      <div className="header">
        <h1>Leaderboard</h1>
      </div>
    )

  }
}

class Total extends Component {
  render() {
    return (
      <div>
        <div className="total-player">
          Players: 3
        </div>
        <div className="total-point">
          Total Point: 100
        </div>
      </div>
    )
  }
}

export default Header
