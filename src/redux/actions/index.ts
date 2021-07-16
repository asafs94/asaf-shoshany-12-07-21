import * as currentPlaceActions from './current-place.actions'
import * as forecastActions from './daily-forecast.actions'
import * as favoritesActions from './favorites.actions';


export default { ...currentPlaceActions, ...forecastActions, ...favoritesActions };