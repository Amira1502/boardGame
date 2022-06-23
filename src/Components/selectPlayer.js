import React, { Component } from 'react';


import Players from './Player';



class PlayerSelect extends React.Component {
    constructor(props) {
    super(props)
    
    this.state = {
    pawns: ['blue', 'black', 'green', 'red'],
    currentPlayerSelect: 1,
    players: [],
    readyToStart: false
  };
    }
  
    
  setPlayer = (pawn) => {
    if (this.state.players.find(player => player.pawn === pawn)) {
      alert('You must choose only 4 players!');
    } else {
      this.setState((prevState) => ({
        currentPlayerSelect: prevState.currentPlayerSelect + 1,
        players: [
          ...prevState.players, {
            number: prevState.currentPlayerSelect,
            pawn
          }
        ],
        readyToStart: prevState.currentPlayerSelect === 2 ? true : false
      }));
    }
  }

 

  startGame = () => {
    this.props.startGame(this.state.players);
  }


  render() {
    return (
      <div>
        <Players showSmoke players={this.state.players} />
        {
          this.state.readyToStart ?
          <React.Fragment>
            <h1>Click start to begin!</h1>
            <button onClick={this.startGame} className="button">Start</button>
          </React.Fragment> :
          <React.Fragment>
            <h1>Player {this.state.currentPlayerSelect}, select a pawn:</h1>
            {
              this.state.pawns.map(pawn => (
                <div className="pawn-container" key={pawn} onClick={() => this.setPlayer(pawn)}>
                    <img
                    className="pawn"
                    alt={pawn}
                    src={`./pawn/${pawn}-pawn.png`} />
                  <img
                    className="pawn-logo"
                    alt={pawn}
                    src={`./images/${pawn}.png`} 
                    />
                    
                </div>
              ))
            }
          </React.Fragment>
        }
      </div>
    );
  }
}

export default PlayerSelect;