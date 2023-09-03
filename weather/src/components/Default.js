import React from 'react'
import './Styles/Default.css'




export default function Default({data}) {


  
  return (
          <div className="defa-weather">
            <div className="defa-top">
              <div>
                <p className="defa-city">{data.name}</p>
                <p className="defa-Weather-Description">{data.weather[0].description}</p>
              </div>
              <img alt="weather" src={`assets/icons/${data.weather[0].icon}.png`} className="defa-weather-icon" />
            </div>
            <div className="defa-bottom">
              <p className="defa-temperature">{Math.round(data.main.temp)}°C</p>
              <div className="defa-details">
                <div className="defa-parameter-row">
                  <span className="defa-parameter-label">Feels Like</span>
                  <span className="defa-parameter-value">{Math.round(data.main.feels_like)}°C</span>
                </div>
      
                <div className="defa-parameter-row">
                  <span className="defa-parameter-label">Wind</span>
                  <span className="defa-parameter-value">{data.wind.speed} m/s</span>
                </div>
      
                <div className="defa-parameter-row">
                  <span className="defa-parameter-label">Humidity</span>
                  <span className="defa-parameter-value">{data.main.humidity}%</span>
                </div>
      
                <div className="defa-parameter-row">
                  <span className="defa-parameter-label">Pressure</span>
                  <span className="defa-parameter-value">{data.main.pressure} hPa</span>
                </div>
              </div>
            </div>
          </div>
        );
      }
