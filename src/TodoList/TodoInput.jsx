import { useState } from 'react';

export default function TodoInput({ onClick }) {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input onChange={handleInput} value={input} />
      <button
        onClick={() => {
          onClick(input);
          setInput('');
        }}
      >
        입력
      </button>
    </>
  );
}
