import { useState } from "react";
import { v4 as uuid } from "uuid";
function AddTodoForm({ addTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            completed: false,
            title: todoTitle,
            id: uuid(),
        };
        addTodo(newTodo);
        setTodoTitle("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todoTitle"
                id="todoTitle"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodoForm;
