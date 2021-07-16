import { useDispatch, useSelector } from "react-redux"
import useStyles from "./Main.styles";
import DailyWeatherList from "../../components/DailyWeatherList";
import { selectCurrentPlace } from "../../redux/selectors/current-place.selectors"
import { selectForecast } from "../../redux/selectors/forecast.selectors";
import { CircularProgress, Typography, useMediaQuery } from "@material-ui/core";
import useTemperaturUnits from "../../hooks/use-temperature-units.hook";
import { formatTemperature } from "../../utils/units.util";
import icons from "../../assets/icons";
import { selectIsFavorite } from "../../redux/selectors/favorites.selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favorites.actions";
import { Button } from "../../components/Button/Button";
import { selectError } from "../../redux/selectors";

const Main = () => {
  const { weather: { temperature }, ...currentPlace } = useSelector(selectCurrentPlace);
  const { key, generalInfo: { localizedName, administrativeArea, country } } = currentPlace;
  const { days } = useSelector(selectForecast)
  const classes = useStyles()
  const unit = useTemperaturUnits();
  const isFavorite = useSelector(selectIsFavorite(key));
  const dispatch = useDispatch();
  const error = useSelector(selectError)
  const toggleFavorite = () => {
    if (isFavorite) dispatch(removeFromFavorites(key));
    else dispatch(addToFavorites(currentPlace));
  }

  const buttonText = isFavorite ? "Remove From Favorites" : "Add To Favorites";
  const iconButton = useMediaQuery('@media screen and (max-width: 27.5rem)')

  if (error) return null;
  if (!key) return <div className={classes.Spinner}> <CircularProgress /> </div>
  return (
    <div className={classes.Root}>
      <div className={classes.GeneralInfo}>
        <Typography className={classes.Name} variant="h3">{localizedName}</Typography>
        <Typography className={classes.Region} component="span" variant="caption" >{administrativeArea.localizedName}, {country.localizedName}</Typography>
        <Typography className={classes.Temperature} variant="h5">{formatTemperature(temperature, unit)}</Typography>
        <Button iconButton={iconButton} startIcon={isFavorite ? <icons.StarFilled /> : <icons.Star />} onClick={toggleFavorite} className={classes.AddToFavorites}>
          {buttonText}
        </Button>
      </div>
      <div className={classes.DailyForecast}>
        <DailyWeatherList days={days} unit={unit} />
      </div>
    </div>
  )
}

export default Main
