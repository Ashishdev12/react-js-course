import { FETCH_ALL_BOOKS_SUCCESS } from "./actionTypes"



const fetchAllBooksSuccessActionCreator = (data) => {
  return {
    type: FETCH_ALL_BOOKS_SUCCESS,
    payload: data
}
}

export default fetchAllBooksSuccessActionCreator;