import { createReducer } from "typesafe-actions";
import { setPlace } from "../actions/current-place.actions";

const initialState = {
  key: '',
  generalInfo: {
    type: "",
    rank: 0,
    localizedName: "",
    country: {
      id: '',
      localizedName: ""
    },
    administrativeArea: {
      id: '',
      localizedName: ""
    }
  },
  weather: {
    lastUpdated: 0,
    text: "",
    icon: 0,
    isDayTime: false,
    temperature: 0,
  },
  error: null as null | Error
}

const currentPlaceReducer = createReducer(initialState)
  .handleAction(setPlace.request, (state, { payload }) => {
    return { ...state, ...payload }
  })
  .handleAction(setPlace.success, (state, { payload }) => {
    return { ...state, weather: payload, error: null, }
  })
  .handleAction(setPlace.failure, (state, action) => {
    return { ...state, error: action.payload }
  })

export default currentPlaceReducer






