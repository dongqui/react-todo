import { useState } from 'react';
import TodoItem from './TodoItem';

let id = 0;

export default function TodoInput() {
  const [input, setInput] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <input onChange={onChangeInput} value={input} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
