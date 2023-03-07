import axios from 'axios';
import { ResponseType } from '../models/CityModel';

const API = '#';

const instanceAxios = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?appid=${API}&lang=en&units=metric&`,
});

export const weatherApi = {
  getWeather(name: string) {
    return instanceAxios.get<ResponseType>(`&q=${name}`).then(res => res.data);
  },
};