import React from 'react';
import logo from '../src/logo/logo3.png';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import '../src/styles/main.scss';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Home />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
