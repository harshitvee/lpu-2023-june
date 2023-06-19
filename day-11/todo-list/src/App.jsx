import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";

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

    function addTodo(newTodo) {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    function clearAll() {
        setTodos([]);
    }
    return (
        <div className="TodoApp">
            <h1>Todo App</h1>
            <AddTodoForm addTodo={addTodo} />
            {/* {todos.map((todo) => {
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
            })} */}

            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        {...todo}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                );
            })}
            {todos.length > 0 && <button onClick={clearAll}>Clear All</button>}
        </div>
    );
}

export default App;
