import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))


sagaMiddleware.run(rootSaga)

export default store