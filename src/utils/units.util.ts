import { TemperatureUnit } from "../types"


export const toFarenheit = (degreeCelsius: number) => {
  return degreeCelsius * 1.8 + 32;
}


export const toCelsius = (degreeFarenheit: number) => {
  return (degreeFarenheit - 32) / 1.8;
}


export const formatTemperature = (degreeCelsius: number, unit: TemperatureUnit) => {
  if (unit === "°F") return `${toFarenheit(degreeCelsius).toFixed(1)}${unit} `;
  return `${degreeCelsius}${unit}`;
}
