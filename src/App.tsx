import React, { useState } from 'react';
import './App.scss';

const apiKey = {
  url:'https://api.openweathermap.org/data/2.5/',
  key:'0ce3b9901c30cb494d6e5e43c1a96ae8'
}

const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt: { key: string; }) => {
    if (evt.key === "Enter") {
      fetch(`${apiKey.url}weather?q=${query}&units=metric&APPID=${apiKey.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d : Date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp >= 16) ? 'app warm' : 'app' || (weather.main.temp < 15) ? 'app cold' : 'app')  : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  )
};

export default App;
