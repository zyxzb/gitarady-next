'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 2rem auto;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid var(--main-color);
  border-right-color: lightgrey;
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
