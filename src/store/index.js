import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from "../reducers/index";

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "../saga/messages";

//creating saga middleware
const sagaMiddleware= createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//creating store, passing root reducer with reduxDevTools and saga Middleware
const store = createStore(reducers,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools));

//passing root saga(watcher saga) to the middleware
sagaMiddleware.run(rootSaga);


export default store;