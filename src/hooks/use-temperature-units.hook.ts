import { useContext } from "react"
import { UnitType } from "../constants/preferences.constants"
import UserPreferencesContext from "../contexts/user-preferences/user-preferences.context"



const useTemperaturUnits = () => {
  const { preferences } = useContext(UserPreferencesContext)
  return preferences.units === UnitType.Imperial ? "°F" : "°C";
}


export default useTemperaturUnits;