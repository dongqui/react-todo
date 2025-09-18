export default function TodoInput({onChange, onClick, item}) {
  return (
    <>
      <input onChange={onChange} value={item} />
      <button onClick={onClick}>입력</button>
    </>
  );
}
