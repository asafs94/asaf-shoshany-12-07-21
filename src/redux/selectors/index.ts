import { RootState } from "../types";


export const selectError = (state: RootState) => state.currentPlace.error || state.dailyForecast.error