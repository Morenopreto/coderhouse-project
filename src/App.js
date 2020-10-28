import React from 'react';
import './App.css';
import NavBar from './components/navbar/navBar';
import Home from './components/home/home';
import './components/general.css';

// 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home greeting="Esto va a ser el home" />
    </div>
  );
}

export default App;
