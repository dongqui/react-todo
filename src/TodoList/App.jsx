import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { useState } from 'react';

export default function App({ handleClick }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (data) => {
    setTodos([data, ...todos]);
  };

  return (
    <div>
      <TodoInput handleClick={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
