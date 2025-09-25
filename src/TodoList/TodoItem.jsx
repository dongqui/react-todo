export default function TodoItem({ value, handleClick }) {
  const addText = () => {};
  return (
    <li>
      {addText()}
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
