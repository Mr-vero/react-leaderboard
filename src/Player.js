import React from 'react'

class Player extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: props.score
    }
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
  }

  decrementScore(event) {
    this.setState({
      score: this.state.score - 10
    })
  }

  incrementScore(event) {
    this.setState({
      score: this.state.score + 10
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

    const scoreStyle = {
      padding: 20
    }

    const buttonStyle = {
      padding: 10
    }

    return (
      <div className="player" style={playerStyle}>
        <div className="player-name" style={playerNameStyle}>
          {this.props.name}
        </div>
        <div className="player-score" style={playerScoreStyle}>
          <div className="counter">
            <button className="counter-action decrement" style={buttonStyle} onClick={this.decrementScore}>-</button>
            <span className="counter-score" style={scoreStyle}>{this.state.score}</span>
            <button className="counter-action increment" style={buttonStyle} onClick={this.incrementScore}>+</button>
          </div>
        </div>
      </div>

    )

  }
}

export default Player
