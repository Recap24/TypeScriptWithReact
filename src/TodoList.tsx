import { useState } from 'react';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
};


const TodoList = () => {
    const [todo , setTodo] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");
    const addTodo = (task: string) => {
        const newTodoItem: Todo = {
            id: todo.length + 1,
            task,
            completed: false,
        };
        setTodo(prevTodos => [...prevTodos, newTodoItem]);
    };
    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={() => { addTodo(newTodo); setNewTodo(""); }}>Add Todo</button>

            <ul>
                {todo.map(todo => (
                    <li key={todo.id}>
                        {todo.task} {todo.completed ? "(Completed)" : ""}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;