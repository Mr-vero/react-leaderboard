import React from 'react'

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">
          Jose Valim
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">30</span>
            <button className="counter-action increment">+</button>
          </div>
        </div>
      </div>

    )

  }
}

export default Player
