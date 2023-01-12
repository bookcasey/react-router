import { useState } from "react";

// Impromptu todo list demo example

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(newTodo);
    // Can't use push, push would mutate
    const newTodoObject = {
      title: newTodo,
      completed: false,
    }
    setTodos([...todos, newTodoObject]);
    setNewTodo("");
  }

  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>New todo value: {newTodo}</h2>
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      </form>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default TodoForm;