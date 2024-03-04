import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PropsCounter {
  initialValue: number;
  MAXIMUN_COUNT: number;
}

export const useCounter = ({ initialValue, MAXIMUN_COUNT }: PropsCounter) => {
  const [count, setCount] = useState(initialValue);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const counterElement = useRef<any>(null);
  const tl = useRef(gsap.timeline());
  const handleClick = (num = 1) => {
    setCount((prev) => Math.min(prev + num, MAXIMUN_COUNT));
  };

  useLayoutEffect(() => {
    if (!counterElement.current) return;
    tl.current
      .to(counterElement.current, {
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
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [count]);

  return {
    count,
    elementToAnimate: counterElement,
    handleClick,
  };
};
