import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = ({loggedIn, setLoggedIn}) => {
    




    return(

        <ul className="header">
            <li><NavLink exact to ="/">Home</NavLink></li>
            {!loggedIn ?
            <li><NavLink to="/login">Login</NavLink></li> 
            :
            <li><NavLink to= "/logout">Logout</NavLink></li>
            }
        </ul>

    );
   
}
export default Navigation;