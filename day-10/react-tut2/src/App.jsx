/* eslint-disable react/jsx-key */
import "./App.css";
import Card from "./Card";
const todos = [
    { id: 1, title: "play cricket", completed: true },
    { id: 2, title: "teach student to react", completed: false },
    { id: 3, title: "watch web series", completed: false },
];

function App() {
    return (
        <>
            <h2>How to render an array/list</h2>
            {/* {todos.map((todo) => {
                return (
                    <Card>
                        <h1>title: {todo.title}</h1>
                        <h2>
                            {todo.completed ? "completed" : "not completed yet"}
                        </h2>
                    </Card>
                );
            })} */}

            {/* use implicit return  */}

            {todos.map((todo) => (
                <Card>
                    <h1>title: {todo.title}</h1>
                    <h2>
                        {todo.completed ? "completed" : "not completed yet"}
                    </h2>
                </Card>
            ))}
        </>
    );
}

export default App;
