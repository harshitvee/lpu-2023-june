import styles from "./Todo.module.css";
function Todo({ title, completed, deleteTodo, toggleCompleted, id }) {
    return (
        <div className={styles.todo}>
            <h2 className={completed ? styles.completed : null}>{title}</h2>
            <div className="buttonWrapper">
                <button
                    className="delete"
                    onClick={() => {
                        deleteTodo(id);
                    }}
                >
                    Delete
                </button>
                <button
                    className="done"
                    onClick={() => {
                        toggleCompleted(id);
                    }}
                >
                    {completed ? "Undone" : "Done"}
                </button>
            </div>
        </div>
    );
}
export default Todo;
