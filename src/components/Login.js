import React, {useState} from "react";
import {Redirect} from "react-router-dom";




function Login(props){

    const loggedIn = props.loggedIn;
    const login = props.login;
    const message = props.message;
    
    const user = {username: "", password: ""};
    const [credentials, setCredentials] = useState(user);
    
    

    if(loggedIn){
        return <Redirect to={{ pathname: "/", state: { from: props.location } }} />

    }

    function userLogin(evt){
        evt.preventDefault();
        login(credentials.username, credentials.password);

        
    };
    function onChange(evt){
        setCredentials({...credentials, [evt.target.id]: evt.target.value});
    };

    return(

        
        
        <div>
            <h2>Login</h2>
            {/* <p>{JSON.stringify({message})}</p> */}
            <p>{JSON.stringify(message.status)}</p>
            <form onSubmit={userLogin} onChange={onChange} >
                <input placeholder="User Name" id="username" />
                <input placeholder="Password" id="password" />
                <button>Login</button>
                
            </form>
            if()
            {JSON.stringify({credentials})}
        </div>
        
    )
 

}
export default Login;

