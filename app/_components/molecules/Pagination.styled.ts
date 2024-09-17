'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  svg,
  button {
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  svg {
    width: 35px;
    height: 45px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--main-color);
    background-color: transparent;
    color: var(--main-color);
    &.active {
      background-color: var(--main-color);
      border: none;
      color: var(--bgc-color);
    }
  }
`;
