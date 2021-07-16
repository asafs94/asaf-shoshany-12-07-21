import { createAsyncAction } from "typesafe-actions";
import { Forecast, Place } from "../../types";


export const fetchForecast = createAsyncAction(
  'daily-forecast/fetch/request',
  'daily-forecast/fetch/response',
  'daily-forecast/fetch/error',
)<Place["key"], Forecast, Error>()

