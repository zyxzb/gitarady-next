'use client';

import styled from 'styled-components';

export const Wrapper = styled.table`
  margin: 0 auto;
  padding: 16px;
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: '';
    clip-path: polygon(
      0% 0%,
      0% 100%,
      4% 100%,
      4% 4%,
      100% 4%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 0%
    );
    background-color: var(--main-color);
    width: 50px;
    height: 50px;
  }

  &::after {
    left: 0;
    top: 0;
  }

  &::before {
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
  }

  th {
    color: #333;
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

  td {
    font-weight: bold;
    color: var(--main-color);
    font-size: 1rem;
    padding: 0.8rem;
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: 576px) {
    padding: 30px;

    td {
      font-size: 1.3rem;
      padding: 1.5rem;
    }
  }
`;
