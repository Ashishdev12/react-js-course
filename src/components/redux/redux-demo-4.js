import pkg from '@reduxjs/toolkit';

const { configureStore, createSlice } = pkg;

// 1. Create a slice (combines reducer + actions)
const cookieSlice = createSlice({
  name: 'cookie',
  initialState: { numOfCookies: 10 },
  reducers: {
    buyCookie: (state) => {
      state.numOfCookies -= 1; // RTK uses Immer, so we can "mutate" safely
    }
  }
});

// 2. Extract the action creator
export const { buyCookie } = cookieSlice.actions;

// 3. Create the store
const store = configureStore({
  reducer: cookieSlice.reducer
});

// 4. Log initial state
console.log("Initial state of the store:", store.getState());

// 5. Subscribe to store updates
const unsubscribe = store.subscribe(() => 
  console.log("State:", store.getState())
);

// 6. Dispatch actions
store.dispatch(buyCookie());
store.dispatch(buyCookie());
store.dispatch(buyCookie());

// 7. Unsubscribe
unsubscribe();