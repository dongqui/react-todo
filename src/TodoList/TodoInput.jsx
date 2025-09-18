
let id = 0;

export default function TodoInput({inputValue,onChange,onClick}) {
  return (
    <>
      <input value={inputValue} onChange={onChange}/>
      <button onClick={onClick}>입력</button>
    </>
  );
}
