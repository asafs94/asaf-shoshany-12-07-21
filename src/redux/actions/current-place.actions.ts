import { createAsyncAction } from "typesafe-actions";

import { Place, WeatherInfo } from "../../types";



export const setPlace = createAsyncAction(
  'current/set-place/request',
  'current/set-place/response',
  'current/set-place/error'
)<Place, WeatherInfo, Error>();