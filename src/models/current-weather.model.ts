import { WeatherInfo } from "../types";




export default class CurrentWeatherModel {

  public static toAppModel(apiModel: CurrentWeatherResponse.CurrentWeather): WeatherInfo {
    return {
      icon: apiModel.WeatherIcon,
      isDayTime: apiModel.IsDayTime,
      lastUpdated: new Date(apiModel.LocalObservationDateTime).valueOf(),
      temperature: apiModel.Temperature.Metric.Value,
      text: apiModel.WeatherText
    }
  }

}