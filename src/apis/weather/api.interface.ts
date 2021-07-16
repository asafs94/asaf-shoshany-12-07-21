
export interface WeatherApi {
  getCurrentConditions(locationKey: string): Promise<CurrentWeatherResponse.RootObject>;
  get5dayForecast(locationKey: string): Promise<DailyForecastResponse.RootObject>;
  queryAutoComplete(q: string): Promise<QueryPlaceResponse.RootObject>;
}