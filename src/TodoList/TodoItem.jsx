export default function TodoItem({ todoItem, index, deleteTodo }) {
  return (
    <li>
      {todoItem.todo}
      <button type="button" onClick={() => deleteTodo(index)}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
