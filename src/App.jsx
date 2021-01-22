import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [weather, setWeather] = useState([]);

  const getData = async () => {
    const key = "kf4yoZZJsJNBcsCkcnkgSeIVS9eLgUVpFt5nOj7n"
    const url = `https://api.nasa.gov/insight_weather//?api_key=${key}&feedtype=json&ver=1.0`;

    try {
      const res = await axios.get(url) 
      console.log(res.data);
      setWeather(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => { getData(); },[])

  return (
    <h1>Hello world</h1>
  );
}

export default App;
