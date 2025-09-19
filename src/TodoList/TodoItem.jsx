import Editor from "./Editor"

export default function TodoItem({item, onClickDelete}) {

  const handleClickDelete = () => {
    onClickDelete(item.id)
  }


  return (
    <li>
      {item.content}
      <button type="button" onClick={handleClickDelete}>삭제</button>
      <button type="button" >수정</button>
    </li>
  );
}
