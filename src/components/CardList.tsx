import React from "react";
import "./styles.css";
import { Cards } from "../model";
import SingleCard from "./singleCard";

interface Props {
  cards: Cards[];
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
}
const CardList: React.FC<Props> = ({ cards, setCards }) => {
  return (
    <div className="todos">
      {cards.map((card) => (
        <SingleCard
          card={card}
          key={card.id}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default CardList;
