import React from "react";
import styles from "./Todo.module.css";
import { useContext } from "react";
import { TodoContext } from "./TodoApp";
function Todo({ id, completed, title }) {
    const { dispatch } = useContext(TodoContext);
    return (
        <div>
            <h2 className={completed ? styles.completed : null}>{title}</h2>
            <button
                onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: { id: id } })
                }
            >
                Delete
            </button>
            <button
                onClick={() =>
                    dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } })
                }
            >
                Toggle Comlpeted
            </button>
        </div>
    );
}

export default Todo;
