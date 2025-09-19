import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {

  // 데이터 기본값
  const [data, setInputData] = useState([]);

  //입력값 데이터에 저장
  const dataAdd = (id, content) => {
    setInputData([ {id, content}, ...data ])
  }

  //삭제 버튼 누른 값 인식
  const [deletBtn, setdeletBtn] = useState('');
  const onClick = (e) => {
    setdeletBtn(e.target.value);
  }
  //삭제 함수
  const handleDelet = (datas) => {
    datas.filter( data => data !== deletBtn);
  }

  return (
    <div>
      <TodoInput dataAdd={dataAdd}/>
      <ul>
        {data.map(item => <TodoItem onClick={onClick} key={item.id} data={item.content}/>)}
      </ul>
    </div>
  );
}
