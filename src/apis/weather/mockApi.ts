import { WeatherApi } from './api.interface';
import forecastResponse from '../../responses/5day.json';
import queryResponse from '../../responses/query.json';
import currentResponse from '../../responses/current.json';

class MockWeatherApi implements WeatherApi {
  getCurrentConditions(locationKey: string): Promise<CurrentWeatherResponse.RootObject> {
    const response = currentResponse as CurrentWeatherResponse.RootObject
    return new Promise(resolve => resolve(response))
  }

  get5dayForecast(locationKey: string = ''): Promise<DailyForecastResponse.RootObject> {
    const response = forecastResponse as DailyForecastResponse.RootObject;
    return new Promise(resolve => resolve(response))
  }

  queryAutoComplete(q: string): Promise<QueryPlaceResponse.RootObject> {
    const response = queryResponse as QueryPlaceResponse.RootObject
    return new Promise(resolve => resolve(response))
  }
}


export default new MockWeatherApi();