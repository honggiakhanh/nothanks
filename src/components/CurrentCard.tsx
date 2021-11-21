import React from "react";
import { CurrentCardI, PlayerI } from "../types/types";

interface CurrentCardProps {
  player: PlayerI;
  players: PlayerI[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerI[]>>;
  currentCard: CurrentCardI;
  setCurrentCard: React.Dispatch<React.SetStateAction<CurrentCardI>>;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
}

const CurrentCard = ({
  currentCard,
  setCurrentCard,
  player,
  players,
  setPlayers,
  round,
  setRound,
}: CurrentCardProps) => {
  return (
    <div style={{padding: '5px'}}>
      Num: {currentCard.value} ({currentCard.token}&#11088;){" "}
      <button
        onClick={() => {
          setCurrentCard({
            ...currentCard,
            value: currentCard.value,
            token: currentCard.token + 1,
            turn: currentCard.turn + 1,
          });
          setPlayers(
            players.map((p: PlayerI) =>
              player.id === p.id ? { ...p, token: p.token - 1 } : p
            )
          );
        }}
      >
        Pass
      </button>
      <button
        onClick={() => {
          setRound(round + 1);
          setCurrentCard({
            ...currentCard,
            value: currentCard.cards[round+1],
            token: 0,
          });
          setPlayers(
            players.map((p: PlayerI) =>
              player.id === p.id
                ? {
                    ...p,
                    deck: p.deck.concat(currentCard.value),
                    token: p.token + currentCard.token,
                  }
                : p
            )
          );
        }}
      >
        Take
      </button>
    </div>
  );
};

export default CurrentCard;
