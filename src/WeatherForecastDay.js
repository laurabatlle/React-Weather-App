import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}º`;
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}º`;
  }
  function Day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{Day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
