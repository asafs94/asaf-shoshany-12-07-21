
import { all, call, put, takeLatest } from 'redux-saga/effects'
import weatherApi from '../apis/weather'
import CurrentWeatherModel from '../models/current-weather.model'
import ForecastModel from '../models/forecast.model'
import history from '../router/history'
import { setPlace } from './actions/current-place.actions'
import { fetchForecast } from './actions/daily-forecast.actions'



function* fetchForecastSaga(action: ReturnType<typeof setPlace.request>): Generator {
  try {
    const data = yield call(weatherApi.get5dayForecast, action.payload.key);
    const forecastResponse = data as DailyForecastResponse.RootObject;
    yield put(fetchForecast.success(ForecastModel.toAppModel(forecastResponse)));
  } catch (err) {
    console.error(err)
    yield put(fetchForecast.failure(err));
  }
}

function* requestWeatherInfo(action: ReturnType<typeof setPlace.request>): Generator {
  try {
    const data = yield call(weatherApi.getCurrentConditions, action.payload.key);
    const weatherResponse = data as CurrentWeatherResponse.RootObject;
    yield put(setPlace.success(CurrentWeatherModel.toAppModel(weatherResponse[0])));
  } catch (err) {
    console.error(err)
    yield put(setPlace.failure(err));
  }
}

function* navigateToHome(action: ReturnType<typeof setPlace.request>): Generator {
  if (history.location.pathname !== '/') history.push('/');
}


export default function* rootSaga() {
  yield all([
    takeLatest(setPlace.request, navigateToHome),
    takeLatest(setPlace.request, fetchForecastSaga),
    takeLatest(setPlace.request, requestWeatherInfo),
  ]);
}