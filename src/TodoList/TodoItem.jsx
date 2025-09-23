import { useState } from "react";

export default function TodoItem({data, handleDelete, handleModify}) {
  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(data.content);
  const handleDeleteBtn = () => {
    handleDelete(data.id);
  };
  
  //Editing 상태 변경
  const handleModifyBtn = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    setEditedContent(e.target.value);
  };
  // 수정 완료 후 다시 텍스트 모드로 전환
  const handleSave = () => {
    handleModify(data.id, editedContent);
    setEditing(false); 
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            value={editedContent}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>저장</button>
        </>
        ) : (
          <>
            <span>{data.title}</span>
            <button onClick={handleDeleteBtn}>삭제</button>
            <button onClick={handleModifyBtn}>수정</button>
          </>
        )}
    </li>
  );
}
