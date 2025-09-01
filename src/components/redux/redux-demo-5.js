

const redux = require('redux');
const createStore = redux.createStore;

// action object;
const BUY_A_COOKIE = 'BUY_A_COOKIE';
{
  type: BUY_A_COOKIE;
  payload: ''
}

// action creator 

function buyCookieActionCreator(){
   return{
     type: BUY_A_COOKIE,
    payload: 'cookie'
   }
}

// reducer function
const initialState = {
  numOfCookies: 10
}
const reducer = (state= initialState, action)=>{
  switch(action.type){
    case BUY_A_COOKIE:
      return{
        ...state,
        numOfCookies: state.numOfCookies - 1
      }
      default:
        return state
  }
}

const store = createStore(reducer);
console.log('this is the initial state:', store.getState());

const unsubscribe = store.subscribe(()=>console.log("state", store.getState()))

store.dispatch(buyCookieActionCreator())
store.dispatch(buyCookieActionCreator())
store.dispatch(buyCookieActionCreator())

unsubscribe()
