import { createSlice } from "@reduxjs/toolkit";

const dummySlice = createSlice({
    name: "dummy",
    initialState: { key1: "value1", key2: "value2" },
});

export default dummySlice.reducer;
