import { createStore } from "redux";
import bookReducer from "../reducer/bookReducer";


const store = createStore(bookReducer);

export default store;