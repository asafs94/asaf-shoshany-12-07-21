import { Card, CardContent, Typography } from "@material-ui/core";
import { FC, HTMLAttributes, useMemo } from "react";
import { TemperatureUnit, WeatherDay } from "../../types";
import AppDate from "../../utils/date.util";
import { formatTemperature } from "../../utils/units.util";
import useStyles from "./DailyWeatherCard.styles";


type Props = WeatherDay & HTMLAttributes<HTMLDivElement> & { unit: TemperatureUnit };

const formatByUnit = (value: { min: number, max: number }, unit: TemperatureUnit) => {
  return {
    min: formatTemperature(value.min, unit),
    max: formatTemperature(value.max, unit)
  }
}

const DailyWeatherCard: FC<Props> = ({ className, date, day, night, temperature, unit, ...props }) => {
  const classes = useStyles();
  const appDate = useMemo(() => new AppDate(date), []);
  const t = formatByUnit(temperature, unit);
  return (
    <Card className={classes.Root}>
      <CardContent className={classes.Content}>
        <Typography color="textSecondary" gutterBottom>
          {appDate.toFormattedDate()}
        </Typography>
        <Typography variant="h5" component="h2">
          {appDate.toWeekDay()}
        </Typography>
        <Typography noWrap variant="body1" component="h3">
          {t.min} - {t.max}
        </Typography>
        <div className={classes.TimeOfDay} >
          <div>
            <Typography variant="caption" color="textSecondary">
              Day
            </Typography>
            <Typography variant="body2">
              {day.phrase}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" color="textSecondary">
              Night
            </Typography>
            <Typography variant="body2">
              {night.phrase}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


export default DailyWeatherCard;