import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
function Todos() {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <TodoForm />
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    );
}

export default Todos;
