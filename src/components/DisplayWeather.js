import React from "react";
import "./displayweather.css";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}.Weather
            </span>
            <img className="weather-icon" src={iconurl} alt="" srcset="" />
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                   
                  </td>
                </tr>
                <tr>
                <td>
                    <h4>Wind-Speed(Min)</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                <td>
                    <h4>Previous-Day1</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                   
                  </td>
                </tr>
                <tr>
                <td>
                    <h4>Previous-Day3</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 270.15)}/
                      {Math.floor(data.main.temp_min - 270.15)}
                    </span>
                   
                  </td>
                </tr>
              </table>
            </div>
            
         
            <div className="section2">
              <table>
                <tr>
                <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                <td>
                    <h4>Wind-Speed(Max)</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                <td>
                    <h4>Previous-Day2</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 268.15)}/
                      {Math.floor(data.main.temp_min - 270.15)}
                    </span>
                   
                  </td>
                </tr>
                <tr>
                <td>
                    <h4>Previous-Day4</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 271.15)}/
                      {Math.floor(data.main.temp_min - 269.15)}
                    </span>
                   
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
