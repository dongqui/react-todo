export default function TodoInput({ todo, setTodo, addTodo }) {
  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>입력</button>
    </>
  );
}
