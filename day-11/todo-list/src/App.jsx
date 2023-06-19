import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Go for morning run", completed: true },
        { id: 2, title: "Teach react to students", completed: false },
        { id: 3, title: "Fix bugs of codprog website", completed: false },
    ]);

    function deleteTodo(id) {
        // setTodos((prevTodos) => {
        //     return prevTodos.filter((todo) => (todo.id !== id) );
        // });
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    function toggleCompleted(id) {
        // const newArray = todos.map((todo) => {
        //     if (todo.id === id) {
        //         return { ...todo, completed: !todo.completed };
        //     } else {
        //         return todo;
        //     }
        // });
        // setTodos(newArray);

        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    }

    return (
        <div className="TodoApp">
            <h1>Todo App</h1>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                );
            })}
        </div>
    );
}

export default App;
