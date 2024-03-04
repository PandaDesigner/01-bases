import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface CountProps {
  initialValue?: number;
}
const MAXIMUN_COUNT = 10;
export const CounterEffect = ({ initialValue = 0 }: CountProps) => {
  const [count, setCount] = useState(initialValue);
  const counterElement = useRef<HTMLSpanElement>(null);
  const handleClick = (num = 1) => {
    setCount((prev) => Math.min(prev + num, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (count >= MAXIMUN_COUNT) {
      console.log(
        '%cSe llego al valor máximo ' + count,
        'color:white; background-color:red; padding: 4px 16px; border-radius: 8px width:100%'
      );
      const tl = gsap.timeline();
      tl.to(counterElement.current, {
        y: -10,
        duration: 0.5,
        ease: 'ease.out',
      })
        .to(counterElement.current, {
          fontWeight: 'bold',
          duration: 0.1,
          ease: 'ease.out',
        })
        .to(counterElement.current, {
          y: 0,
          duration: 1,
          ease: 'bounce.out',
        });
    }
  }, [count]);

  return (
    <>
      <h1>Counter Effect</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <h2>Counter:</h2>
        <span ref={counterElement} style={{ fontSize: '1.5rem' }}>
          {count}
        </span>
      </div>
      <br />
      <button onClick={() => handleClick(1)}>Increment + 1</button>
    </>
  );
};
