import { createContext } from "react";
import { UnitType } from "../../constants/preferences.constants";
import { UserPreferences, UserPreferenceSetters } from "./types";

export const initialReducerState = {
  units: UnitType.Metric,
}

const UserPreferencesContext = createContext<{ preferences: UserPreferences, actions: UserPreferenceSetters }>({
  preferences: initialReducerState,
  actions: {
    setUnits: () => { },
  }
});

export default UserPreferencesContext;