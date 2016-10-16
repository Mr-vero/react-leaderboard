import React, {Component} from 'react'

class Header extends Component {
  render() {

    const styles = {
      display: 'flex'
    }

    return (
      <div style={styles}>
        <Total total={this.props.total} />
        <Title title={this.props.title}/>
      </div>
    )
  }
}

class Title extends Component {
  render() {
    const h1Style = {
      margin: 0
    }

    const headerStyle = {
      marginBottom: 22,
      width: 220
    }

    return (
      <div className="header" style={headerStyle}>
        <h1 style={h1Style}>{this.props.title}</h1>
      </div>
    )

  }
}

class Total extends Component {
  render() {
    const styles = {
      flex: '1'
    }
    return (
      <div style={styles}>
        <div className="total-player">
          Players: {this.props.total}
        </div>
        <div className="total-point">
          Total Point: 100
        </div>
      </div>
    )
  }
}

export default Header
