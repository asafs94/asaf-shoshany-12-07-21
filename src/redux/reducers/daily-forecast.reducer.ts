import { createReducer } from "typesafe-actions";
import { WeatherDay } from "../../types";
import { fetchForecast } from "../actions/daily-forecast.actions";

const initialState = {
  lastUpdated: 0,
  days: [] as WeatherDay[],
  error: null as null | Error,
}

const dailyForecastReducer = createReducer(initialState)
  .handleAction(fetchForecast.success, (state, action) => {
    return { ...state, ...action.payload, error: null }
  })
  .handleAction(fetchForecast.failure, (state, action) => {
    return { ...state, error: action.payload }
  })

export default dailyForecastReducer




