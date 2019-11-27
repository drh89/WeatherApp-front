

const url = "http://localhost:8080/CA3/api";




function apiFacade(){

    const getWeatherByLongLat = latLong => {
      const opt = makeOptions("GET",false);
      return fetch(url + "/weather/latlong/" + latLong, opt).then(handleHttpErrors);
    }

    const getWeatherByCity = cityname => {
      const opt = makeOptions("GET",false);
      return fetch(url + "/weather/fivedays/" + cityname, opt).then(handleHttpErrors);

    }
    
    

    const setToken = token => {
        localStorage.setItem("jwtToken", token);
      };
      const getToken = () => {
        return localStorage.getItem("jwtToken");
      };
      const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
      };
      const logout = () => {
        localStorage.removeItem("jwtToken");
      };
      
      const getTokenInfo = () => {
        let jwt = localStorage.getItem("jwtToken");
        let jwtData = jwt.split(".")[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData;
      };

      const login = (user, password) => {
        const options = makeOptions("POST", true, {
          username: user,
          password: password
        });
        return fetch(url + "/login", options)
          .then(handleHttpErrors)
          .then(res => {
            setToken(res.token);
          });
      };

      const makeOptions = (method, addToken, body) => {
        var opts = {
          method: method,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json"
          }
        };
        if (addToken && loggedIn()) {
          opts.headers["x-access-token"] = getToken();
        }
        if (body) {
          opts.body = JSON.stringify(body);
        }
        return opts;
      };

      function handleHttpErrors(res) {
        if (!res.ok) {
          return Promise.reject({ status: res.status, fullError: res.json() });
        }
        return res.json();
      };


      return {
        getWeatherByLongLat,
        getWeatherByCity,
        makeOptions,
        setToken,
        getToken,
        getTokenInfo,
        loggedIn,
        login,
        logout
      };

}

const facade = apiFacade();
export default facade;






