export default function TodoItem({data, handleModify}) {
  
  return (
    <li>
      {data.content}
      <button type="button">삭제</button>
      <button type="button" handleModify={(e) => {handleModify(data.content)}}>수정</button>
    </li>
  );
}
