export default function TodoItem({data,onClick}) {

  return (
    <li>
      {data}
      <button type="button" onClick={onClick}>삭제</button>
      <button type="button">수정</button>
    </li>
  );
}
