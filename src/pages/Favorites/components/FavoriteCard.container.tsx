
import { FC, HTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import FavoriteCard from "../../../components/FavoriteCard";
import useFetchWeather from "../../../hooks/fetch-weather.hook";
import useTemperaturUnits from "../../../hooks/use-temperature-units.hook";
import { setPlace } from "../../../redux/actions/current-place.actions";
import { removeFromFavorites } from "../../../redux/actions/favorites.actions";
import { Place } from "../../../types";


type Props = HTMLAttributes<HTMLDivElement> & Omit<Place, "key"> & { placeId: string };


const FavoriteCardContainer: FC<Props> = ({ placeId, generalInfo, ...props }) => {

  const data = useFetchWeather(placeId)
  const units = useTemperaturUnits();
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeFromFavorites(placeId));
  }

  const onWatch = () => {
    dispatch(setPlace.request({ key: placeId, generalInfo }))
  }

  return <FavoriteCard onWatch={onWatch} onDelete={onDelete} generalInfo={generalInfo} units={units} {...data} {...props} />
}


export default FavoriteCardContainer;