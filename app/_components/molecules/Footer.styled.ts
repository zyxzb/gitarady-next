'use client';

import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  padding: 0 20px;
  min-height: 80px;
  border-top: 1px solid lightgray;
  background-color: var(--bgc-color);
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  .built-by,
  .contact {
    width: 280px;
  }
  .built-by {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    opacity: 0.5;
    font-size: 0.9rem;
    height: 20px;
    cursor: pointer;
    button {
      border: none;
      background-color: transparent;
      color: black;
    }
    .author {
      display: none;
      transition: opacity ease-in 0.3s 1s;
      visibility: hidden;
      a {
        margin-left: 5px;
        top: 10px;
        svg {
          color: black;
          width: 0.8rem;
          height: 0.8rem;
          left: 0px;
          top: 1px;
          position: relative;
          &:hover {
            color: var(--main-color);
          }
        }
      }
      &.visible {
        visibility: visible;
        position: relative;
        display: inline;
      }
    }
  }
  .copy {
    padding: 10px;
  }
  .contact {
    display: flex;
    justify-content: center;
    svg {
      color: black;
      margin: 10px;
      width: 1.5rem;
      height: 1.5rem;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: var(--main-color);
      }
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    padding: 0 60px;
    .contact {
      justify-content: flex-end;
    }
    .built-by {
      justify-content: flex-start;
    }
  }
`;
