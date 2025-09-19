import { useState } from "react";
import TodoEditForm from "./TodoEditForm";

export default function TodoItem({ todoItem, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing === false ? (
        <>
          {todoItem.title}
          <button type="button" onClick={() => onDelete(todoItem.id)}>
            삭제
          </button>
          <button type="button" onClick={() => setIsEditing(true)}>
            수정
          </button>
        </>
      ) : (
        <TodoEditForm
          todoItem={todoItem}
          onEdit={onEdit}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
}
