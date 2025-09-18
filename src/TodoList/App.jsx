//todoinput에서 값을 받아와서 Todoitem에 노출
//app에서 상태를 만들어서 todoinput의 인풋값을 업데이트
//todoInput의 입력 버튼을 누르면 state를 todoItem 컴포넌트에 전달/노출

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useState, useRef} from "react";

const mockData = [];

export default function App() {
  const [list, setList] = useState(mockData);

  const idRef = useRef(2);

  const onClickButton = (input) =>{
    setList([
      ...list,
      { 
        id:idRef.current++,
        content:input,
      }
    ]);
  }

  return (
    <div>
      <TodoInput onClick={onClickButton}/>
      <ul>
        {list.map((item)=><TodoItem key={item.id} item={item.content}/>)}
      </ul>
    </div>
  );
}
