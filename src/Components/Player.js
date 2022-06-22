import React from 'react';
import img1 from '../assets/blue-pawn.png'
import img3 from '../assets/alerte.png'

const Players = ({ players, showSmoke }) => (
  <div className="players">
    {
      players.map(player => (
        <div key={player.number} className="player">
          <p>Player {player.number}</p>
          {showSmoke && <img
            className="smoke"
            height="250px"
            src={img3}/>}
          <img
            className="player-pawn"
            alt={player.pawn}
            src={img1} />
          <p className="player-score">{player.score}</p>
        </div>
      ))
    }
  </div>
);

export default Players;