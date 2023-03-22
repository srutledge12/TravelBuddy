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
import flightAPI from "./APIs/flightAPI";
import { Adsense } from "@ctrl/react-adsense";
import countApi from "./APIs/countApi";


const App: React.FC = () => {
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [setup, setSetup] = useState<string>("Still in development but click Go to enjoy a joke");
  const [delivery, setDelivery] = useState<string>("");
  // const [cards, setCards] = useState<Cards[]>([]);
  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (flightNumber) {
      console.log(flightNumber)
    }
    flightAPI({setSetup, setDelivery});
    countApi();
    
  };
  return (
    <div className="App">
      <span className="heading">Travel Buddy</span>
      <InputField
        flightNumber={flightNumber}
        setFlightNumber={setFlightNumber}
        handleAdd={handleAdd}
      />
      <br></br>
      <h2>{setup}</h2>
      <h2>{delivery}</h2>

      <br></br>
      
      <Adsense
        client="ca-pub-6402062289848548"
        slot="7259870550"
        style={{ width: 500, height: 300 }}
        format=""
      />
    </div>
  );
};

export default App;
