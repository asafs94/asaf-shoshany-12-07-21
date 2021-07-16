
import { AppStorageKey } from "../constants/storage.constants";
import { UserPreferences } from "../contexts/user-preferences/types";
import { Place } from "../types";

type AppStorage = {
  [AppStorageKey.UserPreferences]: UserPreferences,
  [AppStorageKey.Favorites]: Place[],
}



class StorageManager {

  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }


  getItem<T extends AppStorageKey>(key: T): null | AppStorage[T] {
    const item = this.storage.getItem(key)
    return item ? JSON.parse(item) : null;
  }

  setItem<T extends AppStorageKey>(key: T, value: AppStorage[T]) {
    const stringified = JSON.stringify(value)
    return this.storage.setItem(key, stringified);
  }

  removeItem<T extends AppStorageKey>(key: T) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }

  getLength() {
    return this.storage.length
  }

}


export default new StorageManager(localStorage)