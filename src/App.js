import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Karusel from '../src/components/Karusel';
import MyJumbotron from "../src/components/MyJumbotron";
import Kards from "../src/components/Kards"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container">
        <MyJumbotron/>
        <Kards/>
        <Karusel/>
      </div>
     
    </div>
  );
}

export default App;
