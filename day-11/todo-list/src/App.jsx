import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Go for morning run", completed: true },
        { id: 2, title: "Teach react to students", completed: false },
        { id: 3, title: "Fix bugs of codprog website", completed: false },
    ]);
    return (
        <div className="TodoApp">
            <h1>Todo App</h1>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                );
            })}
        </div>
    );
}

export default App;
