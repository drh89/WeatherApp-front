import './App.css';
import React, {useState} from 'react';
import facade from "./apiFacade";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navigation from "./components/Navigation";
import Geolocation from "./components/Geolocation";

function App(props) {
  
  const [loggedIn, setLoggedIn] = useState( localStorage.getItem("jwtToken") !== null ? true : false );
  const [message, setMessage] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeatherByLongLat = latLong => {
    facade.getWeatherByLongLat(latLong).then(list => setWeather(list));
  }

  const getWeatherByCity = cityname => {
    facade.getWeatherByCity(cityname).then(list => setWeather(list));
  }
    

  const login = (username, password) => {
    facade.login(username, password).then(res => setLoggedIn(true))
    .catch(res => {
        if(res.status){
           setMessage(res)
        }else{
            console.log("No response from server");
        }
    });
    
    
  };
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  }
  
  const allowed = role => {
    if (!loggedIn) return false;
    return facade.getTokenInfo().roles.includes(role);
  };






  return (
    <Router>
    <div className="App">
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route path ="/"  exact ><Welcome weather={weather} setWeather={setWeather} getWeatherByCity={getWeatherByCity}/></Route>
        <Route path ="/login"> <Login login={login} loggedIn={loggedIn} message={message}/> </Route>
        <Route path ="/logout"> <Logout logout={logout}/></Route>
        <Route path ="/geolocation"> <Geolocation weather={weather} getWeatherByLongLat={getWeatherByLongLat}/></Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
