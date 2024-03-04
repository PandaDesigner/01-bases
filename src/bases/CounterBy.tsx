import { useState } from 'react';

interface CountProps {
  initialValue?: number;
}

interface CounterState {
  value: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: CountProps) => {
  const [{ value, clicks }, setCount] = useState<CounterState>({
    value: initialValue,
    clicks: 0,
  });
  const handleClick = (num: number) => {
    setCount(({ value, clicks }) => ({
      value: value + num,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h3>Counter: {value}</h3>
      <h4>numeros de Click: {clicks}</h4>
      <br />
      <button onClick={() => handleClick(1)}>Increment + 1</button>
      <button style={{ marginLeft: '1rem' }} onClick={() => handleClick(5)}>
        Increment + 5
      </button>
    </>
  );
};
