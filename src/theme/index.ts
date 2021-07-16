import nightPalette from "./night.palette";
import dayPalette from "./day.palette";
import midPalette from "./mid.palette";
import { ThemePalette } from "../constants/theme.constants";


const palettes = {
  [ThemePalette.Night]: nightPalette,
  [ThemePalette.Day]: dayPalette,
  [ThemePalette.Mid]: midPalette
}

export { palettes }
export { default } from './default.theme'