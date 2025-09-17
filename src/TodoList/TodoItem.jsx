export default function TodoItem({ todoItem, deleteTodo }) {
  return (
    <li>
      {todoItem.todo}
      <button type="button" onClick={() => deleteTodo(todoItem.id)}>
        삭제
      </button>
      <button type="button">수정</button>
    </li>
  );
}
