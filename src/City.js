import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./City.css";

export default function City() {
  return (
    <div>
      <h1 id="city">Warsaw</h1>
      <div id="date">Sunday 18:50</div>
      <div className="row">
        <div id="temperature"></div>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt="Clear"
          className="weatheremoji"
        />
        <span className="current-temperature" id="current-temperature">
          -1
        </span>
        <span className="units">
          <a href="/" id="celcius-link">
            °C|
          </a>
          <a href="/" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}