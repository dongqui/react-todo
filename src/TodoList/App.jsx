import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
// import { useState } from 'react';

export default function App() {
  // const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoInput />
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}
