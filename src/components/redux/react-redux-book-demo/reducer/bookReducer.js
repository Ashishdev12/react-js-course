import { FETCH_ALL_BOOKS } from "../actions/actionTypes"

const initialState = {
  data: [],
  error: ''
}

const bookReducer = (state = initialState, action) =>{
 // return a new state
switch(action.type){
  case 'FETCH_ALL_BOOKS':
    return{
      ...state,
      data: [...action.payload]
      
    }
    default: 
      return state
}
}

export default bookReducer;