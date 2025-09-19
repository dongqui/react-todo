import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const data = [];
  const [todos, setTodos] = useState(data);
  const onCreate = (item, id) => {
    setTodos([...todos, { id: id, content: item }]);
  };
  const onDelete = (id) => {
    const newTodos = todos.filter((todo, i) => todo.id !== id);
    setTodos(newTodos);
  };
  const onUpdate = (id, changeValue) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.content = changeValue;
      }
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <TodoInput onCreate={onCreate} />
      <ul>
        {todos.map((todo, i) => {
          const { content, id } = todo;
          return (
            <TodoItem
              key={id}
              todo={todo}
              content={content}
              id={id}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </ul>
    </div>
  );
}
