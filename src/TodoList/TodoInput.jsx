
import { useState } from "react";

let id = 0;

export default function TodoInput({dataAdd}) {
    //입력값 저장
    const [inputValue, setInputValue] = useState('');
    const onChange = (e) => {
      setInputValue(e.target.value);
    }
    function handleClick () {
      dataAdd(id++, inputValue);
    }

  return (
    <>
      <input value={inputValue} onChange={onChange}/>
      <button onClick={handleClick}>입력</button>
    </>
  );
}
