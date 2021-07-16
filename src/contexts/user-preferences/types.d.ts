import { UnitType } from "../../constants/preferences.constants";




type UserPreferences = {
  units: UnitType
}

type UserPreferenceSetters = {
  setUnits: (unitType: UnitType) => void;
}