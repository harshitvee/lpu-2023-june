import { useReducer } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { createContext } from "react";

const TodoContext = createContext();

const initialTodos = [
    { id: 1, title: "teach students ", completed: false },
    { id: 2, title: "Work on codprog UI ", completed: false },
    { id: 3, title: "Watch movie ", completed: false },
];
function reducer(todos, action) {
    switch (action.type) {
        case "DELETE_TODO": {
            return todos.filter((todo) => todo.id !== action.payload.id);
        }
        case "TOGGLE_COMPLETED": {
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        }
        case "ADD_TODO": {
            return [...todos, action.payload.newTodo];
        }
    }
}

function TodoApp() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    return (
        <TodoContext.Provider value={{ todos: todos, dispatch: dispatch }}>
            <AddTodoForm />
            <TodoList />
        </TodoContext.Provider>
    );
}

export default TodoApp;
export { TodoContext };
