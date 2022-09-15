
import React, { FC } from 'react';

import { IResponseCity } from '../models/CityModel';
import { convertedLocalDate } from '../utils/convertedLocalDate';
import { ResultDaysType } from '../utils/formattedDate';
import { weather } from '../utils/weather';

interface IPropsType {
    params: IResponseCity;
    currentWeather: ResultDaysType;
  }
  
  const WeatherFrame: FC<IPropsType> = ({ params, currentWeather }) => {
    const date = convertedLocalDate(currentWeather.weather[0].dt_txt);
    const population = params.population.toLocaleString();
    const description = currentWeather.weather[0].weather[0].description;
    const icon = currentWeather.weather[0].weather[0].icon;
    const pop = (currentWeather.weather[0].pop * 100).toFixed(0);
    const humidity = currentWeather.weather[0].main.humidity.toFixed(0);
    const windSpeed = currentWeather.weather[0].wind.speed.toFixed(2);
    const temp = weather(currentWeather.weather).toFixed(1);
  
    return (
      <div className='m-5 p-10 mb-8 box-border shadow-md bg-slate-800 rounded-md text-slate-200'>
        <div className='box-border flex flex-wrap justify-between'>
          <div className='box-border flex basis-1/2 flex-wrap items-center text-6xl gap-x-[2rem]'>
            <div className='box-border'>
               <img src={`http://openweathermap.org/img/wn/${icon}.png`} height='20' className='max-w-full h-auto rounded-full' alt="" />
            </div>
            <div className='box-border flex flex-col items-end'>
              <span className='box-border text-base'>Average daily T°</span>
              <div className='box-border flex items-start'>
                {temp} <span  className='box-border text-base'>°C</span>
              </div>
            </div>
            <ul className='box-border pl-0 text-base'>
              <li className='box-border'>
                Precipitation probability:
                <span> {pop}%</span>
              </li>
              <li className='box-border'>
                Humidity:
                <span> {humidity}%</span>
              </li>
              <li className='box-border'>
                Wind:
                <span> {windSpeed}</span> м/c
              </li>
            </ul>
          </div>
          <div className='box-border text-right'>
            <div className='mb-4 box-border text-2xl font-bold tracking-[4.8]'>
              {params.name}
              {params.country && ','} <span>{params.country}</span>
            </div>
            <div>Populatioin: {population}</div>
            <div>{date}</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherFrame;