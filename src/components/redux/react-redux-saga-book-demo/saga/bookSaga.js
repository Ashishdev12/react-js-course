import { FETCH_ALL_BOOKS } from "../actions/actionTypes";
import { takeEvery, put} from 'redux-saga/effects';
import fetchAllBooksSuccessActionCreator from "../actions/fetchAllBooksSuccessActionCreator";


// create a watcher saga


function* bookSaga(){
  yield takeEvery(FETCH_ALL_BOOKS, getAllBooks); // takes 2 arrugment : the action type and the worker saga 
}

// create a worker saga

function* getAllBooks(){
  console.log("getBook() worker saga is called...");
   // actually we should be doing a asynchronous API call
    let response = yield fetch('http://localhost:4001/books'); // axios.get("url")
    console.log("response:", response);
    if(response.status===200){
      
      let dataJson = yield response.json();
      console.log("dataJson:", dataJson);
   
     // so now we have to send this dataJson to the reducer function
        // so that the reducer function will update the state of the store
        // so for this we will dispatch another action say FETCH_ALL_BOOKS_SUCCESS and 
        //put this datJson in the payload of this action object

    yield put(fetchAllBooksSuccessActionCreator(dataJson)); // for dispatching 

} else if (response.status===404){
   // yield put(fetchAllBooksFailureActionCreator(response.statusText)); 
}
}
export default bookSaga;