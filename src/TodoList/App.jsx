//todoinput에서 값을 받아와서 Todoitem에 노출
//app에서 상태를 만들어서 todoinput의 인풋값을 업데이트
//todoInput의 입력 버튼을 누르면 state를 todoItem 컴포넌트에 전달/노출

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useState, useRef} from "react";

const mockData = [];

export default function App() {
  const [list, setList] = useState(mockData);

  const idRef = useRef(1);

  const onClickCreate = (input) =>{
    setList([
      ...list,
      { 
        id:idRef.current++,
        content:input,
      }
    ]);
  }

  const onClickDelete = (id) => {
    setList(list.filter((item)=>
      item.id!==id
    ))
  }

  return (
    <div>
      <TodoInput onClick={onClickCreate}/>
      <ul>
        {list.map((item)=><TodoItem key={item.id} onClick={onClickDelete} item={item}/>)}
      </ul>
    </div>
  );
}
