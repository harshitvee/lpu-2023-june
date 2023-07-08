import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "./feature/todos/todoSlice";
function EditTodoForm({ oldTitle, id, setIsEditModeOn }) {
    const [newTitle, setNewTitle] = useState(oldTitle);
    const dispatch = useDispatch();
    function handleSubmit() {
        dispatch(editTodo({ id: id, newTitle: newTitle }));
        setIsEditModeOn(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="submit">update</button>
        </form>
    );
}

export default EditTodoForm;
