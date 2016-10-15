import React, {Component} from 'react'

class Players extends Component {
  render() {
    return (
      <div className="players">
        <div className="player">
          <div className="player-name">
            Jose Valim
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <span className="counter-score">319</span>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Zed Shaw
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <span className="counter-score">76</span>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Guido
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <span className="counter-score">276</span>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Players
