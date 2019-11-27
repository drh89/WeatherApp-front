import React, {useState} from "react";


const Geolocation = (props) => {

    const imageSource = "https://www.metaweather.com/static/img/weather/ico/";

    const getWeatherByLongLat = props.getWeatherByLongLat;
    const weather = props.weather;
    function getLocation(){
        
    
    if(navigator.geolocation){
       return navigator.geolocation.getCurrentPosition(function(position){
           
            return getWeatherByLongLat(position.coords.latitude + "," + position.coords.longitude)
       });
    }else{
        return"Error";
    }
    }
    
    getLocation();
return (
    
    
    <div>
        {weather.map(day => (
                    <table  key={day.id}>
                    <thead>
                    <tr><th>Test</th><th><img id="img" src={imageSource + day.weather_state_abbr + ".ico"}></img></th></tr>
                </thead>
                <tbody>
            <tr><td>Date</td><td>{day.applicable_date}</td></tr> 
            <tr><td>Weather State</td><td>{day.weather_state_name}</td></tr>
            <tr><td>Temperatur</td><td>{day.the_temp + " C°"}</td></tr>
            <tr><td>Min temp</td><td>{day.min_temp + " C°"}</td></tr>
            <tr><td>Max temp</td><td>{day.max_temp + " C°"}</td></tr>
            <tr><td>Wind Speed</td><td>{day.wind_speed}</td></tr>
            <tr><td>Wind Direction</td><td>{day.wind_direction_compass}</td></tr>
            <tr><td>Humidity</td><td>{day.humidity}</td></tr>
            </tbody>
                </table>
                ))}

    

    </div>
)

};

export default Geolocation;