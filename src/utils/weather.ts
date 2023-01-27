import { IResponseListItem } from '../models/CityModel';

export const weather = (data: IResponseListItem[]) => {
  return data.reduce((acc, item) => acc + item.main.temp, 0) / data.length;
};