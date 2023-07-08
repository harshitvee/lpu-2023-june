import { produce } from "immer";

const todos = [
    {
        title: "learn immer",
        completed: false,
    },
    {
        title: "learn react",
        completed: false,
    },
];

const newTodo = produce(todos, (draft) => {
    draft.push({ title: "new todo", completed: true });
    draft[0].completed = true;
});
