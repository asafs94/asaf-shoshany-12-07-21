
import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { Reducer } from 'redux'
import { UnitType } from '../../constants/preferences.constants'
import { AppStorageKey } from '../../constants/storage.constants'
import storageManagerUtil from '../../utils/storage-manager.util'
import { UserPreferences } from './types'
import UserPreferencesContext, { initialReducerState } from './user-preferences.context'

type Props = PropsWithChildren<{}>


const reducer: Reducer = (state: UserPreferences = initialReducerState, action) => {
  switch (action.type) {
    case "set-unit-type":
      return { ...state, units: action.payload };
    case "set-preferences":
      return { ...state, ...action.payload };
  }

  return state
}


const UserPreferencesProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer<Reducer<UserPreferences, any>>(reducer, initialReducerState);


  const setUnits = (unitType: UnitType) => {
    return dispatch({ type: "set-unit-type", payload: unitType })
  }

  const setPreferences = (preferences: UserPreferences) => {
    return dispatch({ type: "set-preferences", payload: preferences })
  }

  useEffect(() => {
    const preferences = storageManagerUtil.getItem(AppStorageKey.UserPreferences)
    preferences && setPreferences(preferences);
  }, [])

  useEffect(() => {
    storageManagerUtil.setItem(AppStorageKey.UserPreferences, state)
  }, [state])

  return (
    <UserPreferencesContext.Provider value={{ preferences: state, actions: { setUnits } }}>{children}</UserPreferencesContext.Provider>
  )
}

export default UserPreferencesProvider




