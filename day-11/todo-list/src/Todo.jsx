import styles from "./Todo.module.css";
function Todo({ title, completed }) {
    return (
        <div className={styles.todo}>
            <h2 className={completed ? styles.completed : null}>{title}</h2>
            <div className="buttonWrapper">
                <button className="delete">Delete</button>
                <button className="done">
                    {completed ? "Undone" : "Done"}
                </button>
            </div>
        </div>
    );
}
export default Todo;
