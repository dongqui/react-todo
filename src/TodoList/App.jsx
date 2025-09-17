import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todo, setTodo] = useState([]);

  function handleOnClick(input) {
    const newToDo = input;
    setTodo([...todo, newToDo]);
  }

  return (
    <div>
      <TodoInput onClick={handleOnClick} />
      <ul>
        {todo.map((item, i) => {
          return <TodoItem item={item} key={i} />;
        })}
      </ul>
    </div>
  );
}
