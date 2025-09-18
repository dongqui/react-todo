// let id = 0;

export default function TodoInput({item, onChange, onClick}) {
  return (
    <>
      <input onChange={onChange} value={item} />
      <button onClick={onClick}>입력</button>
    </>
  );
}
