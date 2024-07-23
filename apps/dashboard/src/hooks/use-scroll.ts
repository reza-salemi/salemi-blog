import { useState, useEffect, MutableRefObject } from 'react';

const useScrollChange = (
  targetRef: MutableRefObject<HTMLElement | null>,
  threshold = 0.1
): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef, threshold]);

  return isScrolled;
};

export default useScrollChange;
