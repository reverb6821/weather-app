import axios from 'axios';
import { ResponseType } from '../models/CityModel';

const instanceAxios = axios.create({
  baseURL: '#',
});

export const weatherApi = {
  getWeather(name: string) {
    return instanceAxios.get<ResponseType>(`&q=${name}`).then(res => res.data);
  },
};