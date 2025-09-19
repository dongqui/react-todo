import useAsync from "./hooks/useAsync";

export default function TodoInput({ todo, setTodo, onAdd, addSucces }) {
  const [isAdding, onAddSync] = useAsync(onAdd);

  const handleAddTodo = async () => {
    const todoData = { title: todo };

    const result = await onAddSync(todoData);
    if (!result) return;

    addSucces(result);
    setTodo("");
  };

  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button disabled={isAdding} onClick={handleAddTodo}>
        입력
      </button>
    </>
  );
}
