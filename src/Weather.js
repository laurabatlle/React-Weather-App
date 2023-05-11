import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>New York</h1>
      <ul>
        <li>
          <div>Monday 20:54</div>
        </li>
        <li>Few clouds</li>
      </ul>
      <div class="row mt-3">
        <div class="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="mostly cloudy"
          />
          <span className="temperature">6</span> 
          <span className="unit">ºC</span>
        </div>

        <div class="col-6">
          <ul>
            <li>Humidity: 35%</li>
            <li>Wind: 4.92 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
