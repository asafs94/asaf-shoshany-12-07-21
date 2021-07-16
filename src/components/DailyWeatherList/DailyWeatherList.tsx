import classNames from "classnames";
import { useMemo } from "react";
import { FC, HTMLAttributes } from "react";
import { TemperatureUnit, WeatherDay } from "../../types";
import { formatTemperature } from "../../utils/units.util";
import CardList from "../CardList";
import DailyWeatherCard from "../DailyWeatherCard";
import useStyles from "./DailyWeatherList.styles";


type Props = {
  days: WeatherDay[],
  unit: TemperatureUnit
} & HTMLAttributes<HTMLDivElement>




const DailyWeatherList: FC<Props> = ({ className, days, unit, ...props }) => {
  const classes = useStyles();

  const fillerArray: WeatherDay[] = useMemo(() => days.length < 5 ?
    [...days, ...new Array(5 - days.length).fill({
      key: '', date: new Date(), temperature: { min: 0, max: 0 }, day: { phrase: 'No Data' }, night: { phrase: 'No Data' },
    })] : [], [days])

  return (
    <CardList className={classNames(classes.Root, className)}>
      {days.map((day, index) => <DailyWeatherCard key={day.date.toString()} unit={unit} {...day} />)}
      {fillerArray.map((day, index) => <DailyWeatherCard key={`filler-${index}`} unit={unit} {...day} />)}
    </CardList>
  )
}


export default DailyWeatherList;