import { createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import bookReducer from "../reducer/bookReducer";
import { configureStore } from "@reduxjs/toolkit";
import bookSaga from '../saga/bookSaga';


// const store = createStore(bookReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: bookReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(bookSaga);



export default store;