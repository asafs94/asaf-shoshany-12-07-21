declare module DailyForecastResponse {

  export interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate?: any;
    EndEpochDate?: any;
    MobileLink: string;
    Link: string;
  }

  export interface Minimum {
    Value: number;
    Unit: string;
    UnitType: number;
  }

  export interface Maximum {
    Value: number;
    Unit: string;
    UnitType: number;
  }

  export interface Temperature {
    Minimum: Minimum;
    Maximum: Maximum;
  }

  export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  }

  export interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  }

  export interface DailyForecast {
    Date: string;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
  }

  export interface RootObject {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
  }

}

declare module CurrentWeatherResponse {

  export interface Metric {
    Value: number;
    Unit: string;
    UnitType: number;
  }

  export interface Imperial {
    Value: number;
    Unit: string;
    UnitType: number;
  }

  export interface Temperature {
    Metric: Metric;
    Imperial: Imperial;
  }

  export interface CurrentWeather {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType?: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
  }

  export type RootObject = CurrentWeather[]

}

declare module QueryPlaceResponse {

  export interface Country {
    ID: string;
    LocalizedName: string;
  }

  export interface AdministrativeArea {
    ID: string;
    LocalizedName: string;
  }

  export interface Place {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: Country;
    AdministrativeArea: AdministrativeArea;
  }

  export type RootObject = Place[];

}



