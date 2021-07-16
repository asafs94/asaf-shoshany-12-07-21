import { createReducer } from "typesafe-actions";
import { Place } from "../../types";
import { addToFavorites, initFavorites, removeFromFavorites } from "../actions/favorites.actions";

const initialState = [] as Array<Place>

const favoritesReducer = createReducer(initialState)
  .handleAction(addToFavorites, (state, action) => {
    return [...state, action.payload]
  })
  .handleAction(removeFromFavorites, (state, action) => {
    return state.filter(place => place.key !== action.payload);
  })
  .handleAction(initFavorites, (state, action) => {
    return action.payload;
  })

export default favoritesReducer




