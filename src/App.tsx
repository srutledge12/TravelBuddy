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
import { dateToCloudFormation } from "aws-cdk-lib";
import { DateTimeAttribute } from "aws-cdk-lib/aws-cognito";

const App: React.FC = () => {
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [setup, setSetup] = useState<string>(
    "Still in development but click Go to enjoy a joke"
  );
  const [delivery, setDelivery] = useState<string>("");
  const [origin, setOrigin] = useState<string>("47.6044,-122.3345");
  const [destination, setDestination] = useState<string>("47.4464,-122.2993");
  const [travelMode, setTravelMode] = useState<string>("driving");
  const [travelTime, setTravelTime] = useState<Date>(new Date(0));
  const [airport, setAirport] = useState<string>("SEA");
  const [tsaTime, setTsaTime] = useState<Date>(new Date(17.5*60000));
  const [walkTime, setWalkTime] = useState<Date>(new Date(12.33*60000));
  const [bufferTime, setBufferTime] = useState<Date>(new Date(20.66 * 60000));
  const [totalTime, setTotalTime] = useState<Date>(new Date(0));
  const [boardingTime, setBoardingTime] = useState<Date>(new Date());

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // setBoardingTime(new Date());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => setOrigin(position.coords.latitude + ',' + position.coords.longitude));
    }
    if (flightNumber) {
      console.log(flightNumber);
    }
    flightAPI({ setSetup, setDelivery });
    getDistance();
    sumTimes();  
    console.log(boardingTime);
  };
  
  const getDistance = async () => {
    distanceApi({
      origin: origin,
      destination: destination,
      travelMode,
      setTravelTime,
    });
  };

  
  const sumTimes = async () => {
    await setTotalTime(new Date(travelTime.getTime() + tsaTime.getTime() + walkTime.getTime() + bufferTime.getTime()));
    setBoardingTime(new Date(boardingTime.getTime() - totalTime.getTime()))
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
      {/* <h2>{setup}</h2>
      <h2>{delivery}</h2> */}
      <h2>You Should Leave At:</h2>
      <h1>{boardingTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h1>
      <br></br>
      <h2>Travel Time if {travelMode}</h2>
      <h2>{travelTime.toISOString().substring(11,19)}</h2>
      <h2>TSA Time at {airport}</h2>
      <h2>{tsaTime.toISOString().substring(11,19)}</h2>
      <h2>Walking Time</h2>
      <h2>{walkTime.toISOString().substring(11,19)}</h2>
      <h2>Leisure Time</h2>
      <h2>{bufferTime.toISOString().substring(11,19)}</h2>
      <h2>Total Time to Gate</h2>
      <h2>{totalTime.toISOString().substring(11,19)}</h2>
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
