import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {

  //입력값 받아오기
  const [inputValue, setInputValue] = useState('');
  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  //TodoItem 넘길 데이터 기본값
  const [data, setInputData] = useState('');
  const dataForm = [{
    id: '',
    content: '리액트 공부'
  }]

  //입력값 데이터에 저장
  const dataAdd = () => {
    setInputData( inputValue, ...data)
  }

  //li 내용 바꾸기
  const liContentChange = () => {

  }
  
  return (
    <div>
      <TodoInput value={inputValue} onChange={onChange} onClick={dataAdd}/>
      <ul>
        <TodoItem data={data}/>
      </ul>
    </div>
  );
}
