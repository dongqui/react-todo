import { useState } from 'react';

export default function TodoItem({ item, deleteClick, todo, setTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item);

  return isEditing ? (
    <EditToDoList
      setIsEditing={setIsEditing}
      editValue={editValue}
      setEditValue={setEditValue}
      item={item}
      todo={todo}
      setTodo={setTodo}
    />
  ) : (
    <ToDoList
      item={item}
      deleteClick={deleteClick}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    />
  );
}

function ToDoList({ item, deleteClick, isEditing, setIsEditing }) {
  return (
    <li>
      {item}
      <button type="button" onClick={() => deleteClick(item)}>
        삭제
      </button>
      <button
        type="button"
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        수정
      </button>
    </li>
  );
}

function EditToDoList({
  item,
  editValue,
  setIsEditing,
  setEditValue,
  todo,
  setTodo,
}) {
  return (
    <>
      <li>
        <input
          type="text"
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />

        <button
          onClick={() => {
            // 버튼 클릭 시 todo 배열의 원래 값과 내가 선택한 요소의 값이 같으면 내가 수정한 값으로 변경
            setTodo(
              todo.map((original) => (original === item ? editValue : original))
            );
            setIsEditing(false);
          }}
        >
          확인
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          취소
        </button>
      </li>
    </>
  );
}
