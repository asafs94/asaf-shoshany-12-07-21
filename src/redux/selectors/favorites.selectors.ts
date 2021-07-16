import { RootState } from "../types";

export const selectFavorites = (state: RootState) => state.favorites;


export const selectIsFavorite = (locationKey: string) => (state: RootState) => selectFavorites(state).some(({ key }) => key === locationKey);