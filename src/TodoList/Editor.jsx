import {useState} from "react"

const Editor = ({item, onClickUpdate, handleIsEditing}) => {
  const [editedContent, setEditedContent] = useState(item.content);
  
  const handleEditConfirm = () =>{
    onClickUpdate(item.id, editedContent)
    handleIsEditing()
  }

  const handleEditedContent = (e) => {
    setEditedContent(e.target.value)
  }

  return (
    <li>
      <input value={editedContent} onChange={handleEditedContent}/>
      <button onClick={handleEditConfirm}>확인</button>
      <button onClick={handleIsEditing}>취소</button>
    </li>
  )
}

export default Editor