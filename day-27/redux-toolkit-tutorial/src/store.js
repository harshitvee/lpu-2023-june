import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import dummyReducer from "./feature/dummy/dummySlice";
// in redux toolkit we slice (divide) our application into multiple feature

// every feature/slice has reducers (function to update state)

// we use dispatch function to update the state (dispatch call the reducers)

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dummy: dummyReducer,
    },
});

export { store };
