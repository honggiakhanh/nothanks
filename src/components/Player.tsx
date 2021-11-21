import React from "react";
import { PlayerI, CurrentCardI } from "../types/types";
import CurrentCard from "./CurrentCard";

interface PlayerProps {
  player: PlayerI;
  players: PlayerI[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerI[]>>;
  currentCard: CurrentCardI;
  setCurrentCard: React.Dispatch<React.SetStateAction<CurrentCardI>>;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
}

const Player = ({
  player,
  players,
  currentCard,
  setCurrentCard,
  setPlayers,
  round,
  setRound,
}: PlayerProps) => {
  return (
    <div>
      <div>
        Player: {player.name} ({player.token} &#11088;)
      </div>
      <div>
        Deck:{" "}
        {player.deck
          .sort((a, b) => a - b)
          .map((card) => (
            <>{card} </>
          ))}
      </div>
      <div>
        {round >= currentCard.cards.length ? null : players.length < 3 || players.length > 7 ? null : currentCard.turn % 4 === player.id ? (
          <CurrentCard
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            player={player}
            players={players}
            setPlayers={setPlayers}
            round={round}
            setRound={setRound}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Player;
