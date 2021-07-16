import { useEffect } from "react"
import storageManagerUtil from "../utils/storage-manager.util"


type Params = Parameters<typeof storageManagerUtil.setItem>

const useSaveToStorage = (key: Params[0], value: Params[1], condition: boolean = true) => {

  useEffect(() => {
    condition && storageManagerUtil.setItem(key, value)
  }, [key, value, condition])
}



export default useSaveToStorage;