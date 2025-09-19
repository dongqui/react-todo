import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./api";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handledAddSucces = (newAddTodo) => {
    console.log(newAddTodo);
    setTodoList([...todoList, newAddTodo]);
  };

  const handleDeleteTodo = async (id) => {
    const result = await deleteTodo(id);
    if (!result) return;

    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  };

  const handleEditTodo = async (id, editTodo) => {
    const result = await updateTodo(id, editTodo);
    if (!result) return;

    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, title: editTodo } : todoItem
      )
    );
  };

  useEffect(() => {
    async function loadTodos() {
      try {
        const todos = await getTodos();
        setTodoList(todos);
      } catch (error) {
        console.log(error);
      }
    }

    loadTodos();
  }, []);

  return (
    <div>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        onAdd={addTodo}
        addSucces={handledAddSucces}
      />
      <ul>
        {todoList.length > 0 ? (
          todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              onDelete={handleDeleteTodo}
              onEdit={handleEditTodo}
            />
          ))
        ) : (
          <p>할 일이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
