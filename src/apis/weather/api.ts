import axios from 'axios';
import { generatePath } from 'react-router-dom';
import { WeatherApi } from './api.interface';
import ApiMap from './apiMap';
import { ApiMapItem, Params } from './types';

class AccWeatherApi implements WeatherApi {

  private url = "https://dataservice.accuweather.com";
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private generateUrl(url: string, pathParams?: Params) {
    const formattedPath = pathParams ? generatePath(url, pathParams) : url;
    return this.url + formattedPath;
  }

  private request<T extends ApiMapItem>(api: T, params?: { pathParams?: Params, queryParams?: Params }) {
    const { pathParams, queryParams = {} } = params || {};
    const formattedUrl = this.generateUrl(api.url, pathParams);
    return axios.get(formattedUrl, { params: { apikey: this.apiKey, ...queryParams } })
  }

  getCurrentConditions = (locationKey: string) => {
    const pathParams = { locationKey }
    return this.request(ApiMap.getCurrentConditions, { pathParams })
      .then(response => response.data as CurrentWeatherResponse.RootObject)
  }

  get5dayForecast = (locationKey: string) => {
    const pathParams = { locationKey }
    const queryParams = { metric: true }
    return this.request(ApiMap.get5dayForecast, { pathParams, queryParams })
      .then(response => response.data as DailyForecastResponse.RootObject);
  }

  queryAutoComplete = (q: string) => {
    const queryParams = { q }
    return this.request(ApiMap.queryLocations, { queryParams })
      .then(response => response.data as QueryPlaceResponse.RootObject)
  }

}


export default Object.freeze(new AccWeatherApi(process.env.REACT_APP_WEATHER_API_KEY as string));