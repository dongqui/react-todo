import { useState, useRef } from 'react';

let id = 0;

export default function TodoInput({ handleClick }) {
  const [input, setInput] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    const content = input;
    handleClick(content);
  };

  return (
    <>
      <input onChange={onChangeInput} value={input} />
      <button onClick={onClickButton}>입력</button>
    </>
  );
}
