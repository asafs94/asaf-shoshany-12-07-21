import { ReactNode } from "react"
import { RootState } from "./redux/types"

type Forecast = {
  lastUpdated: number,
  days: WeatherDay[]
}

type WeatherDay = {
  date: Date,
  temperature: Range,
  day: ShortForecast,
  night: ShortForecast
}

type ShortForecast = {
  icon: ReactNode,
  phrase: string
}

type Range = {
  min: number,
  max: number
}

type Place = {
  key: string,
  generalInfo: {
    type: string,
    rank: number,
    localizedName: string,
    country: {
      id: string,
      localizedName: string
    },
    administrativeArea: {
      id: string,
      localizedName: string
    }
  }
}

type WeatherInfo = {
  lastUpdated: number,
  text: string,
  icon: number,
  isDayTime: boolean,
  temperature: number,
}


type TemperatureUnit = "°F" | "°C"