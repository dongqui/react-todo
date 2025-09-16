import ColorBox from './ColorBox';
import ResetButton from './ResetButton';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleOnClick = () => {
    setColor('');
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={handleColor} />
      </div>
      <ColorBox color={color} />
      <ResetButton onClick={handleOnClick} />
    </div>
  );
}

export default App;
