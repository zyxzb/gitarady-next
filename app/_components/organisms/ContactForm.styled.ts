'use client';

import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  &::before,
  &::after {
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
  input,
  textarea {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: 10px;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input {
    width: 100%;
    height: 40px;
  }
  textarea {
    width: 100%;
    height: 180px;
  }
  button {
    position: relative;
    bottom: -30px;
  }
  .input-box {
    margin-bottom: 10px;
  }
  .error {
    color: var(--main-color);
    font-size: 14px;
  }
  @media (min-width: 576px) {
    padding: 30px;
  }
  button {
    bottom: -20px;
  }
`;
