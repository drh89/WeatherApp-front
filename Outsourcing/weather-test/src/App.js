import React from 'react';
import './App.css';

function renderButton(caption) {
  return(
    <div className="button" onClick={() => alert(caption)}><span>{caption}</span></div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="header-left">
          <div className="header-logo-container">
          </div>
          <input placeholder="Searchbar" />
        </div>
        <div className="header-right">
          {renderButton("Login")}
          {renderButton("Register")}
        </div>
      </div>
      <div className="body">
        <div className="weather-container">
          <div className="weather-container-text"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
