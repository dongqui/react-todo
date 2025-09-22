import Editor from "./Editor"
import {useState} from "react"

export default function TodoItem({item, onClickDelete, onClickUpdate}) {
  const [isEditing, setIsEditing] = useState(false);


  const handleClickDelete = () => {
    onClickDelete(item.id)
  }
  
  const handleIsEditing = () =>{
    setIsEditing(!isEditing)
  }

  return (
    (isEditing)
    ?(<Editor 
        item={item} 
        onClickUpdate={onClickUpdate}
        handleIsEditing={handleIsEditing}
      />)
    :(
      <li>
        {item.title}
        <button type="button" onClick={handleClickDelete}>삭제</button>
        <button type="button" onClick={handleIsEditing}>수정</button>
      </li>
    )
  );
}
