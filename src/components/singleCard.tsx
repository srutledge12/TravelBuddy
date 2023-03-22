import React from "react";
import { PropertyAccessChain } from "typescript";
import { Cards } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Card } from "react-bootstrap";

type Props = {
  card: Cards;
  cards: Cards[];
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
};

const SingleCard = ({ card, cards, setCards }: Props) => {
  const handleSold = (id: string) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isSold: !card.isSold } : card
      )
    );
  };
  return (
    <form className="todos__single">
      {card.isSold ? (
        <s className="todos__single--text">{card.cardName}</s>
      ) : (
        <span className="todos__single--text">{card.cardName}</span>
      )}

      <div>

        <span className="icon" onClick={()=>handleSold(card.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleCard;
