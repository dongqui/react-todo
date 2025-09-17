import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  let id = 0;

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodoList([...todoList, { id: id++, todo: todo }]);
    setTodo("");
  };

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ul>
        {todoList.length > 0 ? (
          todoList.map((todoItem, index) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))
        ) : (
          <p>할 일이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
