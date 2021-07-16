import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import geolocationApi from "../apis/geolocation";
import weatherApi from "../apis/weather";
import PlaceModel from "../models/place.model";
import { setPlace } from "../redux/actions/current-place.actions";





export const useGeolocation = () => {
  const [geolocationData, setGeolocationData] = useState<null | GeolocationResponse.RootObject>(null);
  const dispatch = useDispatch()
  useEffect(() => {
    geolocationApi.getGeolocationData().then(setGeolocationData)
  }, [])

  useEffect(() => {
    if (geolocationData) {
      weatherApi.queryAutoComplete(geolocationData.city)
        .then((response) => dispatch(setPlace.request(PlaceModel.toAppModel(response[0]))))
        .catch(error => dispatch(setPlace.failure(error)))
    }

  }, [geolocationData])

  return;
}