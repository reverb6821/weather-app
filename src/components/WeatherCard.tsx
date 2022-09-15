import React, { FC } from 'react';
import { actions } from '../redux/reducer/weatherReducer';
import { useAppDispatch } from '../models/action';
import { convertedLocalDate } from '../utils/convertedLocalDate';
import { ResultDaysType } from '../utils/formattedDate';
import { weather } from '../utils/weather';

interface IPropsType {
  onChangeSelected: (val: number) => void;
  active: boolean;
  day: number;
  weatherData: ResultDaysType;
}

const WeatherCard: FC<IPropsType> = ({ onChangeSelected, active, day, weatherData }) => {
  const data = convertedLocalDate(weatherData.weather[0].dt_txt);
  const description = weatherData.weather[0].weather[0].description;
  const temp = weather(weatherData.weather).toFixed(1);
  const icon = weatherData.weather[0].weather[0].icon;

  const dispatch = useAppDispatch();

  const onHandlerDays = (day: number) => {
    onChangeSelected(day);
    dispatch(actions.changeDay(day));
  };

  return (
    <div
      className={active ? 'box-border m-2 p-2 flex w-full cursor-pointrer flex-col items-center gap-2 rounded-lg text-center  shadow-md max-w-md text-slate-100  bg-slate-800' : 'box-border flex w-full cursor-pointrer flex-col items-center gap-2 rounded-lg text-center bg-slate-600 shadow-md max-w-md m-2 p-2 text-slate-100'}
      onClick={() => onHandlerDays(day)}
    >
      <div className='box-border'>{data}</div>
      <div className='box-border'>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
      </div>
      <div className='box-border'>
        {temp} <span>°C</span>
      </div>
      <div>{description}</div>
    </div>
  )
}

export default WeatherCard;