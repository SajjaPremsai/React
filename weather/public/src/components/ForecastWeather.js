import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

import "./Styles/ForecastWeather.css";

export default function ForecastWeather({ data }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayweek = new Date().getDay();

  const day = days.slice(dayweek, days.length).concat(days.slice(0, dayweek));

  return (
    <div className="Accord">
      <Accordion>
        {data.list.splice(0, 7).map((data, id) => (
          <AccordionItem eventKey={id} className="item ">
            <AccordionHeader>
              <div className="content">
                <div className="content-top">
                  <span className="header">{day[id]}</span>
                  <img
                    alt="weather"
                    src={`./assets/icons/${data.weather[0].icon}.png`}
                    className="accord-img"
                  />
                  <span className="header-1">
                    {data.weather[0].description}
                  </span>
                </div>
                              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="details">
              <div className="parameter-row">
                  <span className="parameter-label-main">Temperature</span>
                  <span className="parameter-value-main">
                    {data.main.temp}°C
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Temp-Min</span>
                  <span className="parameter-value">
                    {data.main.temp_min}°C
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Temp-Max</span>
                  <span className="parameter-value">
                    {data.main.temp_max}°C
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Feels Like</span>
                  <span className="parameter-value">
                    {data.main.feels_like}°C
                  </span>
                </div>

                <div className="parameter-row">
                  <span className="parameter-label">Wind</span>
                  <span className="parameter-value">{data.wind.speed} m/s</span>
                </div>

                <div className="parameter-row">
                  <span className="parameter-label">Humidity</span>
                  <span className="parameter-value">{data.main.humidity}%</span>
                </div>

                <div className="parameter-row">
                  <span className="parameter-label">Pressure</span>
                  <span className="parameter-value">
                    {data.main.pressure} hPa
                  </span>
                </div>
              </div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
