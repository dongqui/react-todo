import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getTodos } from "./api";

let id = 0;

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodoList([...todoList, { id: id++, title: todo }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  };

  const editTodo = (id, newTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, todo: newTodo } : todoItem
      )
    );
  };

  useEffect(() => {
    async function loadTodos() {
      try {
        const todos = await getTodos();
        console.log(todos);
        setTodoList(todos);
      } catch (error) {
        console.log(error);
      }
    }

    loadTodos();
  }, []);

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ul>
        {todoList.length > 0 ? (
          todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        ) : (
          <p>할 일이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
