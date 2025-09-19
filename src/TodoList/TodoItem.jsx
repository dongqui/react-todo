export default function TodoItem({item, onClick}) {
  
  const handleClick = () => {
    onClick(item.id)
  }
  
  return (
    <li>
      {item.content}
      <button type="button" onClick={handleClick}>삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
