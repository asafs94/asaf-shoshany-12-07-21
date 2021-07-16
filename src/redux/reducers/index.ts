import { combineReducers } from "redux";
import currentPlaceReducer from "./current-place.reducer";
import dailyForecastReducer from "./daily-forecast.reducer";
import favoritesReducer from "./favorites.reducer";





const rootReducer = combineReducers({
  currentPlace: currentPlaceReducer,
  dailyForecast: dailyForecastReducer,
  favorites: favoritesReducer
})

export default rootReducer;