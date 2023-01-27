import { IWeather, IWeatherFrame } from './WeatherModel'

export interface IResponseCity {
    country: string;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
    cod: string;
  }

  export interface IResponseListItem {
    clouds: { all: number };
    dt: number;
    dt_txt: string;
    pop: number;
    visibility: number;
    weather: Array<IWeather>;
    main: IWeatherFrame;
    wind: {
      speed: number;
    };
  }

  export type ResponseType = {
    city: IResponseCity;
    list: Array<IResponseListItem>;
  };