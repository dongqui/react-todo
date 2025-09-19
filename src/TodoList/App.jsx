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
  //삭제하기
  //삭제 함수 다시 작성
  // const handleDelet = (datas) => {

  // }

  //수정하기
  //수정 버튼 누르면 content 내용 담긴 input 생성

  const [modify , setModify]= useState(data.content);
  const handleModify = () => {
    setModify(<input>content</input>)
  }
  
  return (
    <div>
      <TodoInput dataAdd={dataAdd}/>
      <ul>
        {data.map(item => <TodoItem handleModify={handleModify} key={item.id} data={item}/>)}
      </ul>
    </div>
  );
}
