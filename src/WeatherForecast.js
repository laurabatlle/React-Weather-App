import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "6b72d3t9e0a187fb46324o57dba90ad0";
  let lon = props.data.coordinates.longitude;
  let lat = props.data.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img src={props.data.iconUrl} alt={props.data.description} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
