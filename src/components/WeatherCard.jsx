import React from 'react';
import moment from 'moment';

const WeatherCard = ({ sol, date, season, min, max }) => {

  return (
    <div className="card">
      <h2>Sol {sol}</h2>
      <h3>{moment(date).format("ddd, MMM D")}</h3>
      <hr/>
      <p>High: {max}°C</p>
      <p>Low: {min}°C</p>
      <p>{season}</p>
    </div>
  );
}

export default WeatherCard;