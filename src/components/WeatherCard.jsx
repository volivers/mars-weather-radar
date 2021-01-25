import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCloudSun, faWind, faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const WeatherCard = ({ sol, date, min, max }) => {

  const randChance = Math.random();

  return (
    <div className="card">
      <h3><FontAwesomeIcon icon={faClock} /> Sol {sol}</h3>
      <h4>{moment(date).format("ddd, MMM D")}</h4>
      <hr/>
      <div className="stats-wrapper">
        <p><FontAwesomeIcon icon={faSun} /> High: {Math.floor(max)} Pa</p>
        <p><FontAwesomeIcon icon={faMoon} /> Low: {Math.floor(min)} Pa</p>
        {randChance > 0.66
          ? <p><FontAwesomeIcon icon={faCloudSun} /> Sunny</p>
          : randChance > 0.33
          ? <p><FontAwesomeIcon icon={faWind} /> Wind</p>
          : <p><FontAwesomeIcon icon={faMeteor} /> Meteors</p>}
      </div>
    </div>
  );
}

export default WeatherCard;