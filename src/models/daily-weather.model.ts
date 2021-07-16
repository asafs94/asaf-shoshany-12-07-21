import { WeatherDay } from "../types";




export default class DailyWeatherModel {


  private static icon(iconType: number) {
    return null;
  }

  public static toAppModel(apiModel: DailyForecastResponse.DailyForecast): WeatherDay {
    return {
      date: new Date(apiModel.Date),
      day: {
        icon: DailyWeatherModel.icon(apiModel.Day.Icon),
        phrase: apiModel.Day.IconPhrase,
      },
      night: {
        icon: DailyWeatherModel.icon(apiModel.Night.Icon),
        phrase: apiModel.Night.IconPhrase
      },
      temperature: {
        max: apiModel.Temperature.Maximum.Value,
        min: apiModel.Temperature.Minimum.Value
      }
    }
  }




}