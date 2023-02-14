import React from "react";
import "./styles.css";
import {Cards} from "../model";



interface Props{
    cards: Cards[];
    setCards: React.Dispatch<React.SetStateAction<Cards[]>>
}
const CardList:React.FC<Props> = ({cards, setCards}) =>
{
    return(
        <div className="todos">
            {cards.map((card)=> (
                    <li>{"For Sale: " + card.cardName  + " $" + card.price+ " " + card.isSold}</li>
                ))}
        </div>
    )
}

export default CardList;