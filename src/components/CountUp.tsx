
import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
}

const CountUp = ({ end, start = 0, duration = 2, decimals = 0 }: CountUpProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const multiplier = 1 * 10 ** decimals;
  
  useEffect(() => {
    const inViewport = () => {
      if (!countRef.current) return false;
      const rect = countRef.current.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    
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
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [end, start, duration]);
  
  return (
    <span ref={countRef as React.RefObject<HTMLSpanElement>}>
      {count.toLocaleString()}
    </span>
  );
};

export default CountUp;
