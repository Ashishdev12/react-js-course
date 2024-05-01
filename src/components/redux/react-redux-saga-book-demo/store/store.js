// import { createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import bookReducer from "../reducer/bookReducer";
import { configureStore } from "@reduxjs/toolkit";
import bookSaga from '../saga/bookSaga';


// const store = createStore(bookReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({   // this takes an object and we pass two argument 
  reducer: bookReducer,
  middleware: [sagaMiddleware],  // including saga in redux
});

sagaMiddleware.run(bookSaga);



export default store;