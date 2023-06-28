import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "./TodoApp";
function TodoList() {
    const { todos } = useContext(TodoContext);
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    );
}

export default TodoList;
