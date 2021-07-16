import { Card, CardActions, CardContent, CircularProgress, Typography } from "@material-ui/core";
import { FC, HTMLAttributes, ReactNode } from "react";
import icons from "../../assets/icons";
import { Place, TemperatureUnit, WeatherInfo } from "../../types";
import { formatTemperature } from "../../utils/units.util";
import { Button } from "../Button/Button";
import useStyles from "./FavoriteCard.styles";


type Props = Omit<Place, "key"> & {
  weather?: WeatherInfo,
  error?: Error,
  units: TemperatureUnit,
  onDelete: () => void;
  onWatch: () => void;
} & HTMLAttributes<HTMLDivElement>;


const FavoriteCard: FC<Props> = ({ className, generalInfo, weather, error, units, onDelete, onWatch, ...props }) => {
  const classes = useStyles();


  let dynamicContent: ReactNode = <div className={classes.Spinner}>
    <CircularProgress />
  </div>;
  if (weather) dynamicContent = formatTemperature(weather.temperature, units);
  if (error) dynamicContent = <Typography className={classes.Error} >
    <icons.Error />
    Oh oh! Couldn't get the data
  </Typography>

  return (<Card className={classes.Root}>
    <CardContent className={classes.Content}>
      <Typography color="textSecondary" gutterBottom>
        {generalInfo.administrativeArea.localizedName}, {generalInfo.country.localizedName}
      </Typography>
      <Typography variant="h5" component="h2">
        {generalInfo.localizedName}
      </Typography>
      <div className={classes.DynamicContent}>
        {dynamicContent}
      </div>
    </CardContent>
    <CardActions className={classes.Actions}>
      <Button onClick={onWatch}>Watch</Button>
      <Button onClick={onDelete} color="secondary">Delete</Button>
    </CardActions>
  </Card>
  )
}


export default FavoriteCard;