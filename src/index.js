import React from 'react';
import ReactDOM from 'react-dom';

let Leaderboard = React.createClass({
  render: () => {

    const leaderboardStyle = {
      padding: 60
    }

    return (
      <div style={leaderboardStyle}>
        <h1>Leaderboard</h1>
      </div>
    )
  }
})

ReactDOM.render( <Leaderboard />, document.getElementById('root'));
