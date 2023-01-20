import './App.css';
import React, { useEffect, useRef } from "react";
import '../src';

function App() {
  useEffect(()=> {
    geolocalisation();
  }, []);

  const ref = useRef();
  
  const [town, setTown] = React.useState(""); //mettre à jour la ville
  const [temperature, setTemperature] = React.useState(0); //mettre à jour la température
  const [weather, setWeather] = React.useState(""); //mettre à jour la condition météo
  const [tips, setTips] = React.useState(""); //mettre à jour le conseil
  const [icon, setIcone] = React.useState(""); //mettre à jour le conseil


  function geolocalisation (){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(callApiGeo); //callback si tout se passe bien, réussi à récupérer la position
    }else{
        console.log("ERROOR");
    }
  }

  function callApiGeo (positions) {
    console.log(positions.coords);
    fetch("https://izudztw6jk.execute-api.eu-west-1.amazonaws.com/Prod/geo?lon="+positions.coords.longitude+"&lat="+positions.coords.latitude)
    .then((res)=> res.json())
    .then((res) => callApiWeather(res.city));
  }
  function callApiWeather (city) {
    console.log(city);
    fetch("https://izudztw6jk.execute-api.eu-west-1.amazonaws.com/Prod/weather/"+city)
    .then((res)=> res.json())
    .then((res) => printInformations(res));
  }

  function printInformations (infos){
    let ville = infos.city;
    let meteo = infos.condition;
    let temp = infos.temperature;
    
    setTemperature(temp);
    setTown(ville);
    if(meteo==="sunny"){
      setWeather("Soleil");
      setTips("Mettez un tee-shirt.");
    }else if (meteo ==="cloudy"){
      setWeather("Nuageux");
      setTips("Prenez une veste.");
    }else if (meteo ==="windy"){
      setWeather("Venteux");
      setTips("Prenez un coupe-vent.");
    }else if (meteo ==="rainy"){
      setWeather("Pluie");
      setTips("Prenez un parapluie.");
    }else if (meteo ==="stormy"){
      setWeather("Tempête");
      setTips("Prenez un anorak.");
    }
  }

 

  function clickTest() {
    console.log("Bouton");
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='AppContent'>  
          <div>
            <img src="search.png" className='searchIcon' alt="React Image" onClick={callApiGeo} />
            <input ref={ref} type="search" id="searchInput" placeholder='Rechercher'></input>
          </div>
          <div id="localisation">
             <b>{town}</b>  
             <p>.   FRANCE</p>
          </div>
          <hr></hr>
          <div>
            <h1>{temperature}°C</h1>
            <div>{weather}  </div>
            <div>
              <img  alt={weather}></img> 
            </div>
          </div>
          <hr></hr>
          <div>
            <div>{tips}</div>
          </div>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
