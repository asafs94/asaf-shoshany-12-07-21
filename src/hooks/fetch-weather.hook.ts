import { useEffect, useState } from "react"
import weatherApi from "../apis/weather"
import { WeatherInfo } from "../types"
import CurrentWeatherModel from '../models/current-weather.model'


const fetchWeather = (locationKey: string) => {
  return weatherApi.getCurrentConditions(locationKey).then(response => CurrentWeatherModel.toAppModel(response[0]))
}


const useFetchWeather = (locationKey: string) => {

  const [weather, setWeather] = useState<WeatherInfo>();
  const [error, setError] = useState<Error>();


  useEffect(() => {
    fetchWeather(locationKey).then(setWeather).catch(setError);
  }, [locationKey])


  return { weather, error };
}


export default useFetchWeather;