'use client';

import { useState, useEffect, useRef } from 'react';
import { faq } from '../../_utils/constants';
import { Wrapper } from './Faq.styled';
import { MdOutlineWatchLater } from 'react-icons/md';
import useIntersectionObserver from '../../_hooks/useIntersectionObserver';

type Question = {
  id: number;
  title: string;
  answers: string[];
};

const Faq = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const targets = useRef<Set<HTMLDivElement>>(new Set());
  const [entries, setObservedNodes] = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    setObservedNodes(() => Array.from(targets.current));
  }, [setObservedNodes]);

  useEffect(() => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');

        setObservedNodes((observedNodes) =>
          observedNodes.filter((node) => node !== entry.target),
        );
      }
    }
  }, [entries, setObservedNodes]);

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>
          Najczęściej zadawane pytania
          <span className={isHovered ? 'active' : ''}>?</span>
          <div />
        </h2>
      </div>
      <div className='section-center featured'>
        {faq.map((question: Question) => {
          const { id, title, answers } = question;
          return (
            <div
              className='card'
              ref={(element) => {
                if (element) targets.current.add(element);
              }}
              key={id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              role='presentation'
              tabIndex={0}
            >
              <div className='question'>
                <h3>{title}</h3>
              </div>
              <div className='main'>
                <ul>
                  {answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className='lesson-unit'>
        <MdOutlineWatchLater />
        <p>
          Jednostka lekcyjna wynosi pełne <b>60min</b>.
        </p>
      </div>
    </Wrapper>
  );
};

export default Faq;
