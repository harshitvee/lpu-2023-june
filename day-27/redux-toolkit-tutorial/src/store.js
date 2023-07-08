import { configureStore } from "@reduxjs/toolkit";

// in redux toolkit we slice (divide) our application into multiple feature

// every feature/slice has reducers (function to update state)

// we use dispatch function to update the state (dispatch call the reducers)

const store = configureStore({
    reducer: {},
});

export { store };
