import { useSelector } from "react-redux"
import useStyles from "./Favorites.styles";
import CardList from "../../components/CardList";
import { selectFavorites } from "../../redux/selectors/favorites.selectors";
import FavoriteCardContainer from "./components/FavoriteCard.container";
import { Typography } from "@material-ui/core";
import useTemperaturUnits from "../../hooks/use-temperature-units.hook";


const Favorites = () => {

  const classes = useStyles();
  const favorites = useSelector(selectFavorites);




  const favoritesList = favorites.map(({ key, ...data }) =>
    <FavoriteCardContainer
      key={key}
      placeId={key}
      {...data}
    />);

  const content = favorites.length > 0 ? favoritesList : <Typography variant="h5" color="inherit" align="center" >You have no saved favorites</Typography>

  return (
    <div className={classes.Root}>
      {content}
    </div>
  )
}

export default Favorites
