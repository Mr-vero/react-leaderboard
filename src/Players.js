import React, {Component} from 'react'

class Players extends Component {
  render() {
    const playerStyle = {
      display: 'flex',
      padding: 10
    }

    const playerNameStyle = {
      flex: '1'
    }

    const playerScoreStyle = {
      width: 200
    }

    const counterScoreStyle = {
      display: 'inline-block',
      width: 46,
      textAlign: 'center'
    }


    return (
      <div className="players">
        <div className="player" style={playerStyle}>
          <div className="player-name" style={playerNameStyle}>
            Jose Valim
          </div>
          <div className="player-score" style={playerScoreStyle}>
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <span className="counter-score" style={counterScoreStyle}>319</span>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>

        <div className="player" style={playerStyle}>
          <div className="player-name" style={playerNameStyle}>
            Zed Shaw
          </div>
          <div className="player-score" style={playerScoreStyle}>
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <span className="counter-score" style={counterScoreStyle}>76</span>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>

        <div className="player" style={playerStyle}>
          <div className="player-name" style={playerNameStyle}>
            Guido
          </div>
          <div className="player-score" style={playerScoreStyle}>
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <span className="counter-score" style={counterScoreStyle}>276</span>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Players
