import { useState } from "react";
import TodoEditForm from "./TodoEditForm";

export default function TodoItem({ todoItem, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing === false ? (
        <>
          {todoItem.title}
          <button type="button" onClick={() => deleteTodo(todoItem.id)}>
            삭제
          </button>
          <button type="button" onClick={() => setIsEditing(true)}>
            수정
          </button>
        </>
      ) : (
        <TodoEditForm
          todoItem={todoItem}
          editTodo={editTodo}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
}
