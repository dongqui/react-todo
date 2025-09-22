import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function App() {
  const [todo, setTodo] = useState([]);

  //input이 빈 칸이거나 이미 todo에 포함되어 있는 항목을 작성하면 동작하지 않도록!
  function handleOnClick(input) {
    if (!todo.includes(input) && !(input === '')) {
      const newToDo = input;
      setTodo([...todo, newToDo]);
    }
  }

  //filter 함수로 리스트의 값과 일치하지 않는 목록들만 가지고 재렌더링 유도
  function handleDelete(item) {
    const newToDoList = todo.filter((target) => target.id !== item);
    setTodo(newToDoList);
  }

  // fetch로 데이터 받아오기
  useEffect(() => {
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div>
      <TodoInput createClick={handleOnClick} />
      <ul>
        {todo.map((item) => {
          return (
            <TodoItem
              deleteClick={handleDelete}
              todo={todo}
              setTodo={setTodo}
              item={item.title}
              key={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
