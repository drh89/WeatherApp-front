import React, {useState} from "react";
import {Redirect} from "react-router-dom";


function Logout(props){
    const logout = props.logout;

    logout();
    return <Redirect to={{ pathname: "/", state: { from: props.location } }} />


}

export default Logout;