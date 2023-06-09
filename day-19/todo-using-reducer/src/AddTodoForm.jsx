import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { TodoContext } from "./TodoApp";
function AddTodoForm() {
    const [title, setTitle] = useState("");
    const { dispatch } = useContext(TodoContext);
    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            title: title,
            id: uuid(),
            completed: false,
        };
        dispatch({ type: "ADD_TODO", payload: { newTodo: newTodo } });
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
