import './App.css';
import React, {useState} from 'react';
import facade from "./apiFacade";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navigation from "./components/Navigation";

function App(props) {
  
  const [loggedIn, setLoggedIn] = useState( localStorage.getItem("jwtToken") !== null ? true : false );
  const [message, setMessage] = useState("");


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
        <Route path ="/" component={Welcome} exact ></Route>
        <Route path ="/login"> <Login login={login} loggedIn={loggedIn} message={message}/> </Route>
        <Route path ="/logout"> <Logout logout={logout}/></Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
