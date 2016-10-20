import React from 'react'

class AddPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ""
    }

    this.addPlayer = this.addPlayer.bind(this)
    this.onPlayerChange = this.onPlayerChange.bind(this)
  }
  addPlayer(e) {
    this.props.onAdd(this.state.name)
    this.setState({
      name: ""
    })
  }
  onPlayerChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input type="text" id="new_player" placeholder="Put your favorite developer name here..." onChange={this.onPlayerChange} value={this.state.name} />
        <button onClick={this.addPlayer}>Add Player</button>
      </div>
    )
  }
}

export default AddPlayer
