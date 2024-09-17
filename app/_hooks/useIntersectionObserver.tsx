'use client';

import { useRef, useState, useEffect, MutableRefObject } from 'react';

interface IntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type IntersectionObserverReturn = [
  IntersectionObserverEntry[],
  React.Dispatch<React.SetStateAction<Element[]>>,
];

const useIntersectionObserver = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
}: IntersectionObserverProps): IntersectionObserverReturn => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const [observedNodes, setObservedNodes] = useState<Element[]>([]);
  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => setEntries(entries),
      {
        root,
        rootMargin,
        threshold,
      },
    );

    const { current: currentObserver } = observer;

    for (const node of observedNodes) {
      if (node) currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [observedNodes, root, rootMargin, threshold]);

  return [entries, setObservedNodes];
};

export default useIntersectionObserver;
