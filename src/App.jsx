import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import WeatherCard from './components/WeatherCard'
import { Logo, Footer } from './components/Utils'

const App = () => {

  const [forecasts, setForecasts] = useState([]);
  useEffect(() => { getData(); },[])

  const getData = async () => {
    const key = "kf4yoZZJsJNBcsCkcnkgSeIVS9eLgUVpFt5nOj7n"
    const url = `https://api.nasa.gov/insight_weather//?api_key=${key}&feedtype=json&ver=1.0`;

    try {
      const res = await axios.get(url) 
      const data = Object.entries(res.data);  // the response was an object by default, need to convert to array
      // console.log(res.data);
      const sols = data.slice(2, 7);  // getting only last 5 sols (martian days)
      // console.log(sols);
      setForecasts(sols);
      } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main>
      <Logo />
      <h1 className="main-title">Latest Weather at<br/>Elysium Planitia</h1>
      <div className="card-list">
        {forecasts.map(key => {
          return <WeatherCard
            sol={key[0]}
            date={key[1].Last_UTC}
            season={key[1].Season}
            min={key[1].PRE.mn}
            max={key[1].PRE.mx}
            key={key[0]}
          />
        })}
      </div>
      <Footer />
    </main>
  );
}

export default App;
