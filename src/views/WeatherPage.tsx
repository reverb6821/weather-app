import React, { useEffect, useState } from 'react';
import { getWeather } from '../redux/reducer/weatherReducer';
import { useAppDispatch, useAppSelector } from '../models/action';
import ChartBox from '../components/Chart';

import ErrorLoad from '../components/common/ErrorLoad';
import Preloader from '../components/Preloader';

import WeatherCard from '../components/WeatherCard';
import WeatherFrame from '../components/WeatherFrame';

const WeatherPage = () => {
    const [selected, setSelected] = useState(0);
    const dispatch = useAppDispatch();
    const days = useAppSelector(state => state.weather.days);
    const weatherCity = useAppSelector(state => state.weather.weather?.city);
    const currentWeather = useAppSelector(state => state.weather.currentDayWeather);
    const isPending = useAppSelector(state => state.weather.isPending);
    const error = useAppSelector(state => state.weather.error);

    useEffect(() => {
      dispatch(getWeather('roma'));
    }, []);
  
    useEffect(() => {
      setSelected(0);
    }, [weatherCity]);

     if (isPending || !weatherCity) return <Preloader />;
      if (!days || error) return <ErrorLoad />;
  
    return (
      <div className='box-border'>
        <WeatherFrame params={weatherCity!} currentWeather={currentWeather!} />
        <ChartBox />
        <div className='mt-8 box-border flex justify-evenly gap-4'>
          {days!.map((item, index) => (
            <WeatherCard
              key={index}
              day={index}
              weatherData={item}
              active={selected === index}
              onChangeSelected={setSelected}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default WeatherPage;