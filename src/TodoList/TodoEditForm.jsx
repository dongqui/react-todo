import { useState } from "react";

export default function TodoEditForm({ todoItem, editTodo, setIsEditing }) {
  const [newTodo, setNewTodo] = useState(todoItem.todo);

  const changeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const sumitTodo = () => {
    editTodo(todoItem.id, newTodo);
    setIsEditing(false);
  };

  return (
    <>
      <input value={newTodo} onChange={changeTodo}></input>
      <button type="button" onClick={sumitTodo}>
        확인
      </button>
      <button type="button" onClick={() => setIsEditing(false)}>
        취소
      </button>
    </>
  );
}
