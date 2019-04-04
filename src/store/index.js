import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const sagasMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagasMiddleware));

sagasMiddleware.run(sagas);
