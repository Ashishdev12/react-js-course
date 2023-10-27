import { createStore } from "redux";
import cookieReducer from "../reducers/cookieReducer";



const myStore = createStore;

const store = myStore(cookieReducer)

export default store;

