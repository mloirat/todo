import './App.css';
import React from "react";

function App() {

  function clickTest() {
    console.log("Bouton");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='AppContent'>  
          <label for="searchInput">Search the site:</label>
          <input type="search" id="searchInput" placeholder='Rechercher'></input>
          <button onClick={clickTest}>Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
