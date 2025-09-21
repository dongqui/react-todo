import { useState } from "react";

let id = Date.now() % 100000;

export default function TodoInput({ onCreate }) {
  const [inputValue, setInputValue] = useState("");
  const handleTodoAdd = () => {
    if (!inputValue) return;
    onCreate(inputValue, id);
    setInputValue("");
  };
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
        }}
      />
      <button onClick={handleTodoAdd}>입력</button>
    </>
  );
}
