import React, {useState} from "react";

const Welcome = (props) => {

    const weather = props.weather;
    
    const getWeatherByCity = props.getWeatherByCity;
    const city = {cityname:"copenhagen"};
    const [cityname, setCityname] = useState(city);
    const imageSource = "https://www.metaweather.com/static/img/weather/ico/";
    

    function onChange(evt){
        setCityname({...cityname, [evt.target.id]: evt.target.value});
    }

  

    function getFiveDaysWeather(evt){
        evt.preventDefault();
        getWeatherByCity(cityname.cityname);
    }

    

    return (
        <div>
           <h3><p>Search Weather</p></h3>
            <form onChange={onChange} onSubmit={getFiveDaysWeather} >
                <input placeholder="Cityname" id="cityname"></input> 
                <button>Search</button><br></br>
            
               
            
                {weather.map(day => (
                    <table>
                    <thead>
                    <tr key={day.id}><th>Test</th><th><img id="img" src={imageSource + day.weather_state_abbr + ".ico"}></img></th></tr>
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
                
                </form>
        </div>

    );
};

export default Welcome;