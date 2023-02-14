import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ThemeSwitcher from "./ThemeSwitcher";
import InputField from "./components/InputField";
import { Cards } from "./model";
import { DatabaseClusterEngine } from "aws-cdk-lib/aws-rds";
import CardList from "./components/CardList";
// let dez: {};
// let deez: Object;
// let deeex: any;
// type another2 = {
//   val1: string;
//   thes: number;
// }
// interface another3 extends another2 {
//   val1: string;
//   thes: number;
// }
// let de: another2;
// let printName: (deez:object)=>void;
// let rando: unknown;

// de = {val1: "5", thes: 5};
// console.log(de);
const App: React.FC = () => {
  const [card, setCard] = useState<string>("");
  const [cards, setCards] = useState<Cards[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (card) {
      setCards([
        ...cards,
        {
          id: new Date().toISOString(),
          cardName: card,
          price: 20,
          isSold: false,
        },
      ]);
      setCard("");
    }
  };
  return (
    <div className="App">
      <span className="heading"> Logs Cards</span>
      {/* <ThemeSwitcher /> */}
      <InputField
        availableCards={card}
        setAvailableCards={setCard}
        handleAdd={handleAdd}
      />
      <CardList cards={cards} setCards={setCards}/>
    </div>
  );
};

export default App;
