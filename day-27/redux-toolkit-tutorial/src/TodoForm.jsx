import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNewTodo } from "./feature/todos/todoSlice";
function TodoForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false,
        };
        dispatch(addNewTodo({ newTodo: newTodo }));
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
            <input
                type="text"
                placeholder="Add Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
