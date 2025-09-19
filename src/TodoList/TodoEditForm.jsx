import { useState } from "react";

export default function TodoEditForm({ todoItem, onEdit, setIsEditing }) {
  const [editTodo, setEditTodo] = useState(todoItem.title);

  const handleChangeTodo = (e) => {
    setEditTodo(e.target.value);
  };

  const handleSumitTodo = () => {
    onEdit(todoItem.id, editTodo);
    setIsEditing(false);
  };

  return (
    <>
      <input value={editTodo} onChange={handleChangeTodo}></input>
      <button type="button" onClick={handleSumitTodo}>
        확인
      </button>
      <button type="button" onClick={() => setIsEditing(false)}>
        취소
      </button>
    </>
  );
}
