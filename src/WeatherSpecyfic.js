import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherSpecyfic.css";

export default function WeatherSpecyfic() {
  return (
    <div className="col" id="weatherspecyfic">
      <div className="description">Clear</div>
      <div className="humidity">Humidity: 87%</div>
      <div className="feels-like">Feels like: 1°</div>
      <div className="wind">Wind speed: 4 km/h</div>
    </div>
  );
}