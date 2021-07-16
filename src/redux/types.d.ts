import { ActionType } from 'typesafe-actions';
import rootReducer from './reducers';

export type RootAction = ActionType<typeof import('./actions').default>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}


type RootState = ReturnType<typeof rootReducer>;