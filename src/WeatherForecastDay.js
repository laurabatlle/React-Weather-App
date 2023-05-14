import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.daily.time}</div>
      <img
        src={props.data.daily.condition.iconUrl}
        alt={props.data.daily.condition.description}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {props.data.daily.temperature.maximum}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {props.data.daily.temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
