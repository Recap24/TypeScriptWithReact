
import { useState } from "react";
const TodoList = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = () => {
        if (todo) {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
      <div>
        <input
          type="text"
          value={todo}
          placeholder="Enter a new todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        
        <button onClick={addTodo}>Add Todo</button>
    
        <button onClick={() => setTodos([])}>Clear Todos</button>
        <ul>
          {todos.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    );
};

export default TodoList;