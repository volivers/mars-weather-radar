import React from 'react';
import { format } from 'date-fns';

const WeatherCard = ({ sol, date, season, min, max }) => {

  return (
    <div className="card">
      <h2>Sol {sol}</h2>
      <h3>{date}</h3>
      <hr/>
      <p>
        High: {max}°C
        <br/>
        Low: {min}°C
      </p>
      <p>{season}</p>
    </div>
  );
}

export default WeatherCard;