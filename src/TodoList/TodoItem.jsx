export default function TodoItem({ item, deleteClick }) {
  return (
    <li>
      {item}
      <button type="button" onClick={() => deleteClick(item)}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
