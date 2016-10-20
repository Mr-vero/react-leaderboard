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
    const styling = {
      padding: 10
    }

    const inputStyling = {
      flex: 1,
      paddingRight: 20,
      width: "45%",
      height: 27
    }
    const buttonStyling = {
      float: "right",
      marginRight: 80,
      width: 120,
      padding: 10
    }

    return (
      <div style={styling}>
        <input type="text" id="new_player" placeholder="Put your favorite developer name here..." onChange={this.onPlayerChange} value={this.state.name} style={inputStyling} />
        <button style={buttonStyling} onClick={this.addPlayer}>Add Player</button>
      </div>
    )
  }
}

export default AddPlayer
