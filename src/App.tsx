import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ThemeSwitcher from "./ThemeSwitcher";
import InputField from './components/InputField';
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
  return (
    <div className="App">
      <span className="heading"> Logs Cards</span>
      <ThemeSwitcher/>
      <InputField/>
    </div>

  );
}

export default App;
