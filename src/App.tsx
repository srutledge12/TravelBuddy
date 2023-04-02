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
import distanceApi from "./APIs/distanceApi";

const App: React.FC = () => {
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [setup, setSetup] = useState<string>(
    "Still in development but click Go to enjoy a joke"
  );
  const [delivery, setDelivery] = useState<string>("");
  const [origin, setOrigin] = useState<string>("47.6044,-122.3345");
  const [destination, setDestination] = useState<string>("");
  const [travelMode, setTravelMode] = useState<string>("driving");
  const [travelTime, setTravelTime] = useState<number>(0);
  const [airport, setAirport] = useState<string>("SEA");
  const [tsaTime, setTsaTime] = useState<number>(17);
  const [walkTime, setWalkTime] = useState<number>(12);
  const [bufferTime, setBufferTime] = useState<number>(20);
  const [totalTime, setTotalTime] = useState<number>(0);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => setOrigin(position.coords.latitude + ',' + position.coords.longitude));
    }
    if (flightNumber) {
      console.log(flightNumber);
    }
    flightAPI({ setSetup, setDelivery });
    getDistance();
    sumTimes();
  };
  

  const getDistance = async () => {
    distanceApi({
      origin: origin,
      destination: "45.5347,-122.6231",
      travelMode,
      setTravelTime,
    });
  };
  const sumTimes = async () => {
    await setTotalTime(travelTime + tsaTime + walkTime + bufferTime);
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
      <h2>Travel Time if {travelMode}</h2>
      <h2>{travelTime}</h2>
      <h2>TSA Time at {airport}</h2>
      <h2>{tsaTime}</h2>
      <h2>Walking Time</h2>
      <h2>{walkTime}</h2>
      <h2>Leasure Time</h2>
      <h2>{bufferTime}</h2>
      <h2>Total Time to Gate</h2>
      <h2>{totalTime}</h2>
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
