import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './Leaderboard';
import './index.css';

const PLAYERS = [
  {
    name: "Jose Valim",
    score: 312
  },
  {
    name: "Guido van Rossum",
    score: 111
  },
  {
    name: "Zed Shaw",
    score: 222
  },
  {
    name: "Matz",
    score: 70
  }
]

ReactDOM.render(
  <Leaderboard players={PLAYERS} />,
  document.getElementById('root')
);
