import React from 'react';
import './App.scss';
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Section1 from "./components/section1/section1";
import Features from "./components/features/features";


function App() {  
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Section1/>
      <Features/>
    </div>
  );
}

export default App;
