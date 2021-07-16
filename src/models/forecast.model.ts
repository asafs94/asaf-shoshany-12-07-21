import { Forecast, WeatherDay } from "../types";
import DailyWeatherModel from "./daily-weather.model";




export default class ForecastModel {


  private static icon(iconType: number) {
    return null;
  }

  public static toAppModel(apiModel: DailyForecastResponse.RootObject): Forecast {
    return {
      lastUpdated: new Date(apiModel.Headline.EffectiveDate).valueOf(),
      days: apiModel.DailyForecasts.map(DailyWeatherModel.toAppModel)
    }
  }




}