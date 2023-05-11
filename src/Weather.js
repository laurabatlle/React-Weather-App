import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {

  const [weatherData, setWeatherData]= useState({ready:false});
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description, 
      date: new Date(response.data.time * 1000),
      iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"

     
    });
    
    
  }

  if(weatherData.ready){

    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
  
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
  
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date}/>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div class="row mt-3">
          <div class="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
            <span className="temperature">{Math.round(weatherData.temperature)}</span> 
            <span className="unit">ºC</span>
          </div>
  
          <div class="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  else{

    const apiKey = "6b72d3t9e0a187fb46324o57dba90ad0";
 
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`

  axios.get(apiUrl).then(handleResponse);

  return "Loading...";


  }

  }

