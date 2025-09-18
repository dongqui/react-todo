function ResetButton({ reset }) {
  const handleClear = () => {
    reset();
  };
  return <button onClick={handleClear}>초기화</button>;
}

export default ResetButton;
