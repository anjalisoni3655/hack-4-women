import React from 'react';
import './App.scss';
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Section1 from "./components/section1/section1";
import Features from "./components/features/features";
import Footer from "./components/footer/footer"


function App() {  
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Section1/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
