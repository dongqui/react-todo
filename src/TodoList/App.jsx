import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import data from './TodoMockServer/browser.js'; 

export default function App() {

  // 데이터 기본값
  const [data, setInputData] = useState([]);

  // API에서 데이터를 가져오기
  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(data);
      const result = await response.json();
      const { id, title } = data; 
      //데이터 넣기
      setInputData(result.todos);
    }
    
    fetchTodos();
  }, []); 



  //입력값 데이터에 저장
  const dataAdd = (id, content) => {
    setInputData([ {id, content}, ...data ])
  }

  //삭제하기
  const handleDelete = (targetId) => {
    const nextData = data.filter((item) => item.id !== targetId);
    setInputData(nextData);
  }

  //수정하기
  const handleModify = (targetId, newContent) => {
    const nextData = data.map((item) => {
      if (item.id === targetId) {
        return { ...item, content: newContent };
      }
      return item;
    });
    setInputData(nextData);
  };
  
  return (
    <div>
      <TodoInput dataAdd={dataAdd}/>
      <ul>
        {data.map(item => <TodoItem handleDelete={handleDelete} handleModify={handleModify} key={item.id} data={item}/>)}
      </ul>
    </div>
  );
}
