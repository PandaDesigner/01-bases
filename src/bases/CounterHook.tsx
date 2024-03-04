import { useCounter } from '../hooks/useCounter';

interface CountProps {
  initialValue?: number;
}

const MAXIMUN_COUNT = 10;

export const CounterHook = ({ initialValue = 0 }: CountProps) => {
  const { count, handleClick, elementToAnimate } = useCounter({
    initialValue,
    MAXIMUN_COUNT,
  });

  return (
    <>
      <h1>Counter Hook</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <h2>Counter:</h2>
        <span ref={elementToAnimate} style={{ fontSize: '1.5rem' }}>
          {count}
        </span>
      </div>
      <br />
      <button onClick={() => handleClick(1)}>Increment + 1</button>
    </>
  );
};
