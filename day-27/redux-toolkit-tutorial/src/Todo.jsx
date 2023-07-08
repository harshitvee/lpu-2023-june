import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./feature/todos/todoSlice";
import EditTodoForm from "./EditTodoForm";
function Todo({ id, completed, title }) {
    const [isEditModeOn, setIsEditModeOn] = useState(false);
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteTodo({ id: id }));
    }
    return (
        <div style={{ margin: "1rem", padding: "1rem", background: "#ccc" }}>
            {isEditModeOn ? (
                <EditTodoForm
                    oldTitle={title}
                    id={id}
                    setIsEditModeOn={setIsEditModeOn}
                />
            ) : (
                <h2>{title} </h2>
            )}

            {!isEditModeOn && (
                <button onClick={() => setIsEditModeOn(true)}>Edit</button>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Todo;
