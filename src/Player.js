import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }
  incrementScore(e) {
    this.setState({
      score: (this.state.score + 10)
    })
  }
  decrementScore(e) {
    this.setState({
      score: (this.state.score - 10)
    })
  }
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
      <div className="player" style={playerStyle}>
        <div className="player-name" style={playerNameStyle}>
          {this.props.name}
        </div>
        <div className="player-score" style={playerScoreStyle}>
          <div className="counter">
            <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}>-</button>
            <span className="counter-score" style={counterScoreStyle}>{this.state.score}</span>
            <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
          </div>
        </div>
      </div>
    )

  }
}

export default Player
