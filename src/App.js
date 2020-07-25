import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Karusel from '../src/components/Karusel';
import MyJumbotron from "../src/components/MyJumbotron"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container">
        <MyJumbotron/>
        <Karusel/>
      </div>
     
    </div>
  );
}

export default App;
