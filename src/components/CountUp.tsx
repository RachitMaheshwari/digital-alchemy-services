
import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
}

const CountUp = ({ end, start = 0, duration = 2, decimals = 0 }: CountUpProps) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const multiplier = 1 * 10 ** decimals;
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Start animation when element is in view
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          const currentCount = Math.floor(progress * (end - start) + start);
          setCount(currentCount);
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          }
        };
        
        animationFrame = requestAnimationFrame(step);
      }
    });
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [end, start, duration]);
  
  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
    </span>
  );
};

export default CountUp;
