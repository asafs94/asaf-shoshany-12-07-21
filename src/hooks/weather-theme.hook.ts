import { useContext, useEffect } from "react"
import { ThemePalette } from "../constants/theme.constants";
import PaletteContext from "../contexts/theme/palette.context"



const useWeatherTheme = (weather: number) => {
  const setThemePalette = useContext(PaletteContext);

  useEffect(() => {
    setThemePalette(ThemePalette.Night);
  }, [])
}


export default useWeatherTheme;