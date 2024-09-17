'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 40vh;
  right: 0;
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  z-index: 99;
  a {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      width: 70%;
      height: 70%;
      color: var(--bgc-color);
      transition: color ease-in-out 0.3s;
    }
    &:hover {
      svg {
        color: black;
      }
    }
  }
  @media (min-width: 992px) {
    /* top: calc(80px + 8vh); */
    a {
      width: 50px;
      height: 50px;
    }
  }
`;
