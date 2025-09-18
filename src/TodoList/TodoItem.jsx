export default function TodoItem({data}) {
  return (
    <li value={data}>
      예시
      <button type="button">삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
