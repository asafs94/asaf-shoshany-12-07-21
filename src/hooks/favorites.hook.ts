import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppStorageKey } from "../constants/storage.constants";
import { initFavorites } from "../redux/actions/favorites.actions";
import { selectFavorites } from "../redux/selectors/favorites.selectors"
import storageManagerUtil from "../utils/storage-manager.util";
import useSaveToStorage from "./save-to-storage.hook";

const useStorageFavorites = () => {
  const [initiated, setInitiated] = useState(false)
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = storageManagerUtil.getItem(AppStorageKey.Favorites);
    storedFavorites && dispatch(initFavorites(storedFavorites))
    setInitiated(true)
  }, [])

  useSaveToStorage(AppStorageKey.Favorites, favorites, initiated);

}


export default useStorageFavorites;