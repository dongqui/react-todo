import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getTodo, postTodo, deleteTodo, patchTodo } from "./TodoApi";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onCreate = (title) => {
    const createTodos = async () => {
      const newTodo = { title: title };
      const createTodo = await postTodo(newTodo);
      setTodos((prevTodo) => [...prevTodo, createTodo]);
    };
    createTodos();
  };
  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const deleteTodos = async () => {
      await deleteTodo(id);
      setTodos(newTodos);
    };
    deleteTodos();
  };
  const onUpdate = (id, changeValue) => {
    const patchTodos = async () => {
      const patchData = await patchTodo(id, changeValue);
      setTodos(todos.map((todo) => (todo.id === id ? patchData : todo)));
    };
    patchTodos();
  };

  useEffect(() => {
    const todos = async () => {
      const data = await getTodo();
      setTodos(data);
    };
    todos();
  }, []);

  return (
    <div>
      <TodoInput onCreate={onCreate} />
      <ul>
        {todos.map((todo, i) => {
          const { title, id } = todo;
          return (
            <TodoItem
              key={id}
              todo={todo}
              title={title}
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
