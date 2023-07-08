import { createSlice } from "@reduxjs/toolkit";

const intialState = [
    { id: 1, title: "play cricket", completed: true },
    { id: 2, title: "play chess", completed: false },
    { id: 3, title: "watch movies", completed: false },
    { id: 4, title: "go for eat", completed: false },
];

const todoSlice = createSlice({
    name: "todos",
    initialState: intialState,
    reducers: {
        addNewTodo: (state, { payload }) => {
            return [...state, payload.newTodo];
        },
        deleteTodo: (state, { payload }) => {
            return state.filter((todo) => todo.id !== payload.id);
        },
        editTodo: (state, { payload }) => {
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    return { ...todo, title: payload.newTitle };
                } else {
                    return todo;
                }
            });
        },
    },
});
export const { addNewTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
