import{useState} from 'react'

export default function TodoInput({onClick}) {
  const [item, setItem] = useState('');

  const handleClick = ()=>{
    onClick(item);
    setItem('')
  }

  const onChangeContent = (e) => {
    setItem(e.target.value);
  };
  
  return (
    <>
      <input onChange={onChangeContent} value={item} />
      <button onClick={handleClick}>입력</button>
    </>
  );
}
