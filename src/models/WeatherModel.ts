export interface IWeather {
    description: string;
    main: string;
    icon: string;
}

export interface IWeatherFrame {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}