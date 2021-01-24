import React from 'react';

const WeatherCard = ({ sol, date, season, min, max }) => {

  return (
    <div className="card-wrapper">
      <h1>Sol {sol}</h1>
      <h2>{date}</h2>
      <hr />
      <p>High: {max}
      <br />
      Low: {min}</p>
      <p>{season}</p>
    </div>
  );
}

export default WeatherCard;