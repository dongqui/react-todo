import { useState } from "react";

export default function TodoItem({ content, id, onDelete, onUpdate }) {
  const [editValue, setEditValue] = useState(content);
  const [isUpdate, setIsUpdate] = useState(false);
  const handleDelete = () => onDelete(id);
  const handleUpdate = () => {
    setIsUpdate(true);
  };
  const handleSave = () => {
    onUpdate(id, editValue);
    setIsUpdate(false);
  };
  return (
    <li>
      {!isUpdate ? (
        <div>
          {content}
          <button type="button" onClick={handleUpdate}>
            수정
          </button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      ) : (
        <div>
          <input
            value={editValue}
            onChange={(e) => {
              const value = e.target.value;
              setEditValue(value);
            }}
          />
          <button type="button" onClick={handleSave}>
            저장
          </button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}
