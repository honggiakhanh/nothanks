import React, { useState } from "react";
import { PlayerI, CurrentCardI } from './types/types'
import Player from "./components/Player";

const shuffle = (arr: number[]): number[] => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const cards = shuffle([
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
]).splice(0, 24);

const countScore = (arr: number[]): number=> {
  let score = 0
  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== arr[i-1]+1) {
      score+=arr[i]
    }
  }
  return score
}

function App() {
  const [players, setPlayers] = useState<PlayerI[]>([]);
  const [nameInput, setNameInput] = useState<string>('');
  const [round, setRound] = useState<number>(0)
  const [currentCard, setCurrentCard] = useState<CurrentCardI>({
    cards: cards,
    value: cards[round],
    token: 0,
    turn: 0
  })

  const handleNameInputChange = (e: any) => {
    e.preventDefault();
    setNameInput(e.target.value);
  };
  const addPlayer = (e: any) => {
    e.preventDefault();
    const newPlayer: PlayerI = {
      id: Math.max(players.length),
      name: nameInput,
      deck: [],
      token: 11
    }
    setPlayers(players.concat(newPlayer))
  };

  return (
    <div>
      {cards.map((card) => (
        <>{card} </>
      ))}
      <div>round: {round}</div>
      <div>turn: {currentCard.turn}</div>
      <form onSubmit={addPlayer}>
        <input
          placeholder="name"
          value={nameInput}
          onChange={handleNameInputChange}
        />
        <button>Add Player</button>
      </form>
      <div>
        {round >= cards.length ? <div>end game</div> : null}
        --- Game ---
        {players.map(player => (
          <Player player={player} players={players} setPlayers={setPlayers} currentCard={currentCard} setCurrentCard={setCurrentCard} round={round} setRound={setRound}/>
        ))}
      </div>
      {round >= cards.length ? <div>{
          players.map(player => <div>{player.name} score: {countScore(player.deck)-player.token}</div>)
        }</div> : null}
    </div>
  );
}

export default App;
