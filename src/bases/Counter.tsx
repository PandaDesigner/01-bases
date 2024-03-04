import { useState } from 'react';

interface CountProps {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: CountProps) => {
  const [count, setCount] = useState(initialValue);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <>
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
