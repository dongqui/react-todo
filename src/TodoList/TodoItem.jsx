export default function TodoItem({ todoItem }) {
  return (
    <li>
      {todoItem.todo}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
