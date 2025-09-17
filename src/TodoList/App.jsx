import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

let id = 0;

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodoList([...todoList, { id: id++, todo: todo }]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodoList((todoList) => todoList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ul>
        {todoList.length > 0 ? (
          todoList.map((todoItem, index) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              index={index}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p>할 일이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
