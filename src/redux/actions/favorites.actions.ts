import { createAction } from "typesafe-actions";

import { Place } from "../../types";

export const addToFavorites = createAction('favorites/add')<Place>();

export const removeFromFavorites = createAction('favorites/remove')<Place["key"]>()

export const initFavorites = createAction('favorites/init')<Place[]>();